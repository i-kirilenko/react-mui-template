import { envConfig, EnvKey, envList, EnvListItem } from './env.config'

const envDict: Record<EnvListItem, string> = envList.reduce(
  (acc, cur: EnvListItem) => ({ ...acc, [cur]: import.meta.env[cur] || '' }),
  {} as Record<EnvListItem, string>,
)

type Env = Record<EnvKey, boolean | string | number | null>
const env: Env = (Object.keys(envConfig) as EnvListItem[]).reduce(
  (acc, cur) => {
    if (envConfig[cur].type === 'boolean') {
      return { ...acc, [envConfig[cur].name]: envDict[cur] === 'true' }
    }

    if (envConfig[cur].type === 'number') {
      return {
        ...acc,
        [envConfig[cur].name]: Number.isNaN(+envDict[cur])
          ? null
          : +envDict[cur],
      }
    }

    return { ...acc, [envConfig[cur].name]: envDict[cur] }
  },
  {} as Env,
)

export default env
