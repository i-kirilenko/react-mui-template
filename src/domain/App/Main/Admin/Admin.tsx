import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledAdmin } from './Admin.style'

const Admin: FC = () => {
  log('Admin.render')()

  return (
    <StyledAdmin header="Admin" id="Admin" title="Admin">
      <p>Available for admin-role only</p>
    </StyledAdmin>
  )
}

export const testContent = 'Admin test content'
export default withRenderingTest(Admin, testContent)
