import { FC, PropsWithChildren, StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { HashRouter as Router } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

import queryClient, { queryTestClient } from 'api/queryClient'
import env from 'constants/env'
import { defaultSidebarExpanded } from 'constants/layout'
import { ThemeName } from 'constants/themes/base'
import log from 'utils/log'
import { LocaleName } from './ThemeContext/ThemeContext.features'
import LocalSettingsContextProvider, {
  LocalSettingsContextConsumer,
} from './AppWrapper.adapter.LocalSettingsContext'
import SnackbarContextProvider from './SnackbarContext'
import ThemeContextProvider from './ThemeContext'

export const defaultLocaleName: LocaleName = /^ru\b/.test(navigator.language)
  ? 'ruRU'
  : 'enUS'

export const defaultThemeName: ThemeName = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches
  ? 'dark'
  : 'light'

type AppWrapperProps = {
  isTest?: boolean
}

const AppWrapper: FC<PropsWithChildren<AppWrapperProps>> = ({
  children,
  isTest = false,
}) => {
  log('AppWrapper.render')()

  return (
    <StrictMode>
      <SnackbarContextProvider>
        <LocalSettingsContextProvider
          initialState={{
            localeName: defaultLocaleName,
            sidebarExpanded: defaultSidebarExpanded,
            themeName: defaultThemeName,
          }}
        >
          <LocalSettingsContextConsumer>
            {([localSettingsState]) => {
              const { localeName, themeName } = localSettingsState
              return (
                <ThemeContextProvider {...{ localeName, themeName }}>
                  <CssBaseline />
                  <QueryClientProvider
                    client={isTest ? queryTestClient : queryClient}
                  >
                    <HelmetProvider>
                      <Router>{children}</Router>
                      {env.reactQueryDevtoolsEnabled && <ReactQueryDevtools />}
                    </HelmetProvider>
                  </QueryClientProvider>
                </ThemeContextProvider>
              )
            }}
          </LocalSettingsContextConsumer>
        </LocalSettingsContextProvider>
      </SnackbarContextProvider>
      <span style={{ display: 'none' }}>
        {`${env.timestamp} / Branch: ${env.branch}`}
      </span>
    </StrictMode>
  )
}

export default AppWrapper
