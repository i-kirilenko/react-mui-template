import { FC } from 'react'

import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'

import { StyledApp } from './App.style'

const App: FC = () => {
  log('App.render')()

  return (
    <StyledApp className={cnc('App')}>
      <Sidebar />
      <Main />
      <Header />
    </StyledApp>
  )
}

export const testContent = 'App test content'
export default withRenderingTest(App, testContent)
