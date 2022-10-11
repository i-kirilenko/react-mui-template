import { FC } from 'react'

import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledLoading } from './Loading.style'

const Loading: FC = () => <StyledLoading />

export const testContent = 'Loading test content'
export default withRenderingTest(Loading, testContent)
