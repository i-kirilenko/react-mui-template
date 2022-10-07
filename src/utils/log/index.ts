import env from 'constants/env'
import {
  logCases,
  LogCaseWithMessage,
  LogCaseWithMessageGetter,
  PaletteName,
  timeToLive,
} from './log.constants'

type CacheRecord = {
  repetitionsCount: number
  timestamp: number
}

const cache: Record<string, CacheRecord> = {}

type Log = (key: string, paletteName?: PaletteName) => (...p: unknown[]) => void

const log: Log = (key, paletteName = 'default') => {
  if (!env.debugLogEnabled || !key) {
    return () => {}
  }

  const timestamp = Date.now()
  const repeated: boolean =
    !!cache[key] && timestamp - cache[key].timestamp < timeToLive

  const repetitionsCount = repeated ? cache[key].repetitionsCount + 1 : 0
  cache[key] = { repetitionsCount, timestamp }

  const currentRepetitionsCount = repetitionsCount > 2 ? 2 : repetitionsCount
  const currentCase = logCases[paletteName][currentRepetitionsCount]
  return (...args) => {
    const argsAsString = args.length
      ? ` ⟶ ${args.map((p) => `${p}`).join(', ')}`
      : ''

    const { message } = currentCase as LogCaseWithMessage
    const { getMessage } = currentCase as LogCaseWithMessageGetter
    const currentCaseMessage =
      message || (getMessage && getMessage(repetitionsCount)) || ''

    const totalMessage: [string, string] = [
      `%c • ${key + currentCaseMessage + argsAsString}`,
      `color:${currentCase.color}`,
    ]

    console.log(...totalMessage) // eslint-disable-line no-console
  }
}

export default log
