import { FC, PropsWithChildren, useMemo } from 'react'
import { useSnackbar } from 'notistack'

import { ProviderPropsWithLogger } from 'components/Logger'
import env from 'constants/env'
import log from 'utils/log'
import {
  LocalSettingsAbstractState,
  LocalSettingsContextProvider as LocalSettingsAbstractContextProvider,
} from './LocalSettingsContext/LocalSettingsContext.provider'

export type LocalSettingsState = LocalSettingsAbstractState & {
  sidebarExpanded: boolean | null
}

const LocalSettingsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar()

  const localSettingsProviderProps: ProviderPropsWithLogger<LocalSettingsState> =
    useMemo(() => {
      !env.projectPublicName &&
        log(
          'LocalSettings.initializing',
          'error',
        )('missing env.projectPublicName')

      return {
        initial: {
          name: (env.projectPublicName as string | undefined) ?? null,
          sidebarExpanded: null,
        },
        logger: {
          error: [
            (message) => log('LocalSettings.error', 'error')(message || ''),
            (message) => enqueueSnackbar(message, { variant: 'error' }),
          ],
          success: [
            (message) => log('LocalSettings.success', 'success')(message || ''),
          ],
        },
      }
    }, [enqueueSnackbar])

  return (
    <LocalSettingsAbstractContextProvider<LocalSettingsState>
      {...localSettingsProviderProps}
    >
      {children}
    </LocalSettingsAbstractContextProvider>
  )
}

// export const LocalSettingsContextConsumer =
//   LocalSettingsContext.Consumer as Consumer<ContextValue<LocalSettingsState>>

export default LocalSettingsContextProvider
