export const timeToLive = 500

export type PaletteName = 'default' | 'error' | 'success'

export type LogCaseWithMessage = { color: string; message?: string }
export type LogCaseWithMessageGetter = {
  color: string
  getMessage?: (p?: unknown) => string
}

type LogCase = LogCaseWithMessage | LogCaseWithMessageGetter

type LogCases = [LogCase, LogCase, LogCase]

export const logCases: Record<PaletteName, LogCases> = {
  // for rendering case:
  default: [
    { color: 'lightgreen' },
    {
      color: 'lightgreen',
      message: ' - repeat by strict-mode',
    },
    {
      color: 'orange',
      getMessage: (p = '') => ` - extra repeats (${p})!`,
    },
  ],
  error: [{ color: 'red' }, { color: 'red' }, { color: 'red' }],
  success: [{ color: 'skyblue' }, { color: 'red' }, { color: 'red' }],
}
