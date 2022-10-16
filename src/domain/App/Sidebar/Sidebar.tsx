import { FC, memo } from 'react'

import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import Menu from './Menu'

import { StyledSidebar } from './Sidebar.style'

const Sidebar: FC = () => {
  const [localSettingsState] = useLocalSettings<LocalSettingsState>()
  const { sidebarExpanded } = localSettingsState

  log(`Sidebar.render`)(`Expanded: ${sidebarExpanded}`)

  return (
    <StyledSidebar className={cnc('Sidebar')} {...{ sidebarExpanded }}>
      <Menu />
    </StyledSidebar>
  )
}

export const testContent = 'Sidebar test content'
export default withRenderingTest(memo(Sidebar), testContent)
