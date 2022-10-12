import { FC, PropsWithChildren, StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter as Router } from 'react-router-dom'

import env from 'constants/env'
import LocalSettingsContextProvider from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import log from 'utils/log'
import SnackbarContextProvider from './SnackbarContext'

type AppWrapperProps = {}

const AppWrapper: FC<PropsWithChildren<AppWrapperProps>> = ({ children }) => {
  log('AppWrapper.render')()

  return (
    <StrictMode>
      <SnackbarContextProvider>
        <LocalSettingsContextProvider>
          <HelmetProvider>
            <Router>{children}</Router>
          </HelmetProvider>
        </LocalSettingsContextProvider>
      </SnackbarContextProvider>
      <span style={{ display: 'none' }}>
        {`${env.timestamp} / Branch: ${env.branch}`}
      </span>
    </StrictMode>
  )
}

export default AppWrapper
