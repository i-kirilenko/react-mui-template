import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledNoMatch } from './NoMatch.style'

const NoMatch: FC = () => {
  log('NoMatch.render')()

  return (
    <StyledNoMatch header="No match" id="NoMatch">
      <p>Available for any roles</p>
    </StyledNoMatch>
  )
}

export const testContent = 'NoMatch test content'
export default withRenderingTest(NoMatch, testContent)
