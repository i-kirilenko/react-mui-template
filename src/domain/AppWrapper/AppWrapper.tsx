import { FC, PropsWithChildren, StrictMode } from 'react'

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
        {children}
      </LayoutContextProvider>
      <span style={{ display: 'none' }}>
        {`${env.timestamp} / Branch: ${env.branch}`}
      </span>
    </StrictMode>
  )
}

export default AppWrapper
