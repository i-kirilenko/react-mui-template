import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledHome } from './Home.style'

const Home: FC = () => {
  log('Home.render')()

  return (
    <StyledHome header="Home" id="Home" title="Home">
      <p>Available for any roles</p>
    </StyledHome>
  )
}

export const testContent = 'Home test content'
export default withRenderingTest(Home, testContent)
