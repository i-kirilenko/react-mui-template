import { FC, PropsWithChildren, StrictMode } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter as Router } from 'react-router-dom'

import env from 'constants/env'
import { initialSidebarExpanded } from 'constants/layout'
import { LayoutContextProvider } from 'domain/AppWrapper/LayoutContext/LayoutContext.provider'
import log from 'utils/log'

type AppWrapperProps = {}

const AppWrapper: FC<PropsWithChildren<AppWrapperProps>> = ({ children }) => {
  log('AppWrapper.render')()

  return (
    <StrictMode>
      <LayoutContextProvider sidebarExpanded={initialSidebarExpanded}>
        <HelmetProvider>
          <Router>{children}</Router>
        </HelmetProvider>
      </LayoutContextProvider>
      <span style={{ display: 'none' }}>
        {`${env.timestamp} / Branch: ${env.branch}`}
      </span>
    </StrictMode>
  )
}

export default AppWrapper
