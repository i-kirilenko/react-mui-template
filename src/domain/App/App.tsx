import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

const App: FC = () => {
  log('App.render')()

  return <div />
}

export const testContent = 'App test content'
export default withRenderingTest(App, testContent)
