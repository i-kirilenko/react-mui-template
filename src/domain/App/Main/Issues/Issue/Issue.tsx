import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { withRenderingTest } from 'utils/test/renderingTest.hoc'

const Issue: FC = () => <Outlet />

export const testContent = 'Issue test content'
export default withRenderingTest(Issue, testContent)
