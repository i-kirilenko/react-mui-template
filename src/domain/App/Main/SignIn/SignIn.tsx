import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledSignIn } from './SignIn.style'

const SignIn: FC = () => {
  log('SignIn.render')()

  return (
    <StyledSignIn header="Sign in" id="SignIn" title="Sign in">
      <p>Available for any roles</p>
    </StyledSignIn>
  )
}

export const testContent = 'SignIn test content'
export default withRenderingTest(SignIn, testContent)
