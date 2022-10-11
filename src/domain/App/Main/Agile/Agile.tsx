import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledAgile } from './Agile.style'

const Agile: FC = () => {
  log('Agile.render')()

  return (
    <StyledAgile header="Agile Board" id="Agile" title="Agile">
      <p>Available for user- and admin-role only</p>
    </StyledAgile>
  )
}

export const testContent = 'Agile test content'
export default withRenderingTest(Agile, testContent)
