import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledSignOut } from './SignOut.style'

const SignOut: FC = () => {
  log('SignOut.render')()

  return (
    <StyledSignOut header="Sign out" id="SignOut" title="Sign out">
      <p>Available for user- and admin-role only</p>
    </StyledSignOut>
  )
}

export const testContent = 'SignOut test content'
export default withRenderingTest(SignOut, testContent)
