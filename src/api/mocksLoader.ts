import { apiConfigs, BaseApiQueryKey } from 'api/apiConfigs'

const mocksModules: Partial<Record<BaseApiQueryKey, () => Promise<unknown>>> = {
  issuesReading: () => import('./issues/issues.mocks'),
}

const mocksLoader = (): Promise<unknown[]> =>
  Promise.all(
    (Object.keys(mocksModules) as BaseApiQueryKey[])
      .filter((key) => apiConfigs[key]?.mock.enabled)
      .map((key) => (mocksModules[key] ?? (() => null))()),
  )

export default mocksLoader
