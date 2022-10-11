import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledSignUp } from './SignUp.style'

const SignUp: FC = () => {
  log('SignUp.render')()

  return (
    <StyledSignUp header="Sign up" id="SignUp" title="Sign up">
      <p>Available for any roles</p>
    </StyledSignUp>
  )
}

export const testContent = 'SignUp test content'
export default withRenderingTest(SignUp, testContent)
