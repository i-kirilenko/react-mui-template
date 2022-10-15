import { FC, PropsWithChildren, StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter as Router } from 'react-router-dom'

import env from 'constants/env'
import { defaultSidebarExpanded } from 'constants/layout'
import log from 'utils/log'
import { LocaleName, ThemeName } from './ThemeContext/ThemeContext.features'
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

type AppWrapperProps = {}

const AppWrapper: FC<PropsWithChildren<AppWrapperProps>> = ({ children }) => {
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
                  <HelmetProvider>
                    <Router>{children}</Router>
                  </HelmetProvider>
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
