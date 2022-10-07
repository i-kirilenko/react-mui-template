import { FC, PropsWithChildren, StrictMode } from 'react'

import env from 'constants/env'
import log from 'utils/log'

type AppWrapperProps = {}

const AppWrapper: FC<PropsWithChildren<AppWrapperProps>> = ({ children }) => {
  log('AppWrapper.render')()

  return (
    <StrictMode>
      {children}
      <span style={{ display: 'none' }}>
        {`${env.timestamp} / Branch: ${env.branch}`}
      </span>
    </StrictMode>
  )
}

export default AppWrapper
