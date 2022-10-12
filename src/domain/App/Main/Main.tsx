import { FC } from 'react'
import { Routes } from 'react-router-dom'

import RouteCreator from 'components/RouterCreator'
import { initialSidebarExpanded } from 'constants/layout'
import routes from 'constants/routes'
import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { Props as StyledMainProps, StyledMain } from './Main.style'

const Main: FC = () => {
  const [localSettingsState] = useLocalSettings<LocalSettingsState>()
  const { sidebarExpanded = null } = localSettingsState || {}

  log(`Main${sidebarExpanded === null ? '.initial' : ''}.render`)(
    sidebarExpanded,
  )

  const styledMainProps: StyledMainProps = {
    sidebarExpanded: sidebarExpanded ?? initialSidebarExpanded,
  }

  return (
    <StyledMain className={cnc('Main')} {...styledMainProps}>
      <Routes>{Object.values(routes).map(RouteCreator)}</Routes>
    </StyledMain>
  )
}

export const testContent = 'Main test content'
export default withRenderingTest(Main, testContent)
