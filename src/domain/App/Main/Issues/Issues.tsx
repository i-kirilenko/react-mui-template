import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

const Issues: FC = () => {
  log('Issues.render')()

  return <Outlet />
}

export const testContent = 'Issues test content'
export default withRenderingTest(Issues, testContent)
