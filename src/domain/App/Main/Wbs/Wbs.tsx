import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledWbs } from './Wbs.style'

const Wbs: FC = () => {
  log('Wbs.render')()

  return (
    <StyledWbs header="Work Breakdown Structure (WBS)" id="Wbs" title="WBS">
      <p>Available for admin-role only</p>
    </StyledWbs>
  )
}

export const testContent = 'Wbs test content'
export default withRenderingTest(Wbs, testContent)
