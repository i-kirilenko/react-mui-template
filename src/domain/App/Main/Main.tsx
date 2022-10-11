import { FC } from 'react'
import { Routes } from 'react-router-dom'

import RouteCreator from 'components/RouterCreator'
import routes from 'constants/routes'
import { useLayout } from 'domain/AppWrapper/LayoutContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledMain } from './Main.style'

const Main: FC = () => {
  const { sidebarExpanded } = useLayout()

  log('Main.render')()

  return (
    <StyledMain className={cnc('Main')} {...{ sidebarExpanded }}>
      <Routes>{Object.values(routes).map(RouteCreator)}</Routes>
    </StyledMain>
  )
}

export const testContent = 'Main test content'
export default withRenderingTest(Main, testContent)
