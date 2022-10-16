import { FC, memo } from 'react'
import { Routes } from 'react-router-dom'

import RouteCreator from 'components/RouterCreator'
import routes from 'constants/routes'
import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledMain } from './Main.style'

const Main: FC = () => {
  const [localSettingsState] = useLocalSettings<LocalSettingsState>()
  const { sidebarExpanded } = localSettingsState

  log(`Main.render`)(`Expanded: ${sidebarExpanded}`)

  return (
    <StyledMain className={cnc('Main')} {...{ sidebarExpanded }}>
      <Routes>{Object.values(routes).map(RouteCreator)}</Routes>
    </StyledMain>
  )
}

export const testContent = 'Main test content'
export default withRenderingTest(memo(Main), testContent)
