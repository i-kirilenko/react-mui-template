import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledProjects } from './Projects.style'

const Projects: FC = () => {
  log('Projects.render')()

  return (
    <StyledProjects header="Projects" id="Projects" title="Projects">
      <p>Available for user- and admin-role only</p>
    </StyledProjects>
  )
}

export const testContent = 'Projects test content'
export default withRenderingTest(Projects, testContent)
