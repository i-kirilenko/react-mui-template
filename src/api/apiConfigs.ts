import { AxiosApiConfig } from './axios'

const apiQueryKeys = ['issuesReading'] as const
export type BaseApiQueryKey = typeof apiQueryKeys[number]
export type ApiQueryKey =
  | BaseApiQueryKey
  | [BaseApiQueryKey, ...(string | number | boolean)[]]

type ApiConfig = AxiosApiConfig & {
  mock: { timeout?: number }
  url: string
}

const defaultMockConfig = {
  enabled: true,
  timeout: 0,
}

export const apiConfigs: Record<BaseApiQueryKey, ApiConfig> = {
  issuesReading: {
    getMessages: () => ({
      error: 'Error by issues-loading or -parsing',
      success: 'Cases list has been successfully uploaded',
    }),
    mock: { ...defaultMockConfig },
    url: '/api/v1/issues',
  },
}
