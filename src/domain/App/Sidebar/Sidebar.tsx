import { FC } from 'react'

import { initialSidebarExpanded } from 'constants/layout'
import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import Menu from './Menu'

import { Props as StyledSidebarProps, StyledSidebar } from './Sidebar.style'

const Sidebar: FC = () => {
  const [localSettingsState] = useLocalSettings<LocalSettingsState>()
  const { sidebarExpanded = null } = localSettingsState || {}

  log(`Sidebar${sidebarExpanded === null ? '.initial' : ''}.render`)(
    sidebarExpanded,
  )

  const styledSidebarProps: StyledSidebarProps = {
    sidebarExpanded: sidebarExpanded ?? initialSidebarExpanded,
  }

  return (
    <StyledSidebar className={cnc('Sidebar')} {...styledSidebarProps}>
      <Menu />
    </StyledSidebar>
  )
}

export const testContent = 'Sidebar test content'
export default withRenderingTest(Sidebar, testContent)
