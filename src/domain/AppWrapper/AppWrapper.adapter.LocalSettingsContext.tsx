import { Consumer, FC, PropsWithChildren, useMemo } from 'react'
import { useSnackbar } from 'notistack'

import { ContextValue } from 'components/Logger'
import env from 'constants/env'
import {
  LocaleName,
  ThemeName,
} from 'domain/AppWrapper/ThemeContext/ThemeContext.features'
import log from 'utils/log'
import LocalSettingsAbstractContextProvider, {
  LocalSettingsContext,
  LocalSettingsContextProviderProps,
} from './LocalSettingsContext/LocalSettingsContext.provider'

export type LocalSettingsState = {
  localeName: LocaleName
  sidebarExpanded: boolean
  themeName: ThemeName
}

type Props = {
  initialState: LocalSettingsState
}

const LocalSettingsContextProvider: FC<PropsWithChildren<Props>> = ({
  children,
  initialState,
}) => {
  log('LocalSettingsContextProvider.adapter.render')()

  const { enqueueSnackbar } = useSnackbar()

  const localSettingsProviderProps: LocalSettingsContextProviderProps<LocalSettingsState> =
    useMemo(() => {
      !env.projectPublicName &&
        log(
          'LocalSettings.initializing',
          'error',
        )('missing env.projectPublicName')

      return {
        initialState,
        logger: {
          error: [
            (message) => log('LocalSettings.error', 'error')(message || ''),
            (message) => enqueueSnackbar(message, { variant: 'error' }),
          ],
          success: [
            (message) => log('LocalSettings.success', 'success')(message || ''),
          ],
        },
        name: (env.projectPublicName as string | undefined) ?? null,
      }
    }, [enqueueSnackbar, initialState])

  return (
    <LocalSettingsAbstractContextProvider<LocalSettingsState>
      {...localSettingsProviderProps}
    >
      {children}
    </LocalSettingsAbstractContextProvider>
  )
}

export const LocalSettingsContextConsumer =
  LocalSettingsContext.Consumer as Consumer<ContextValue<LocalSettingsState>>

export default LocalSettingsContextProvider
