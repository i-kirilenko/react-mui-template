import { FC, memo } from 'react'

import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import SidebarHandle from './SidebarHandle'

import { StyledHeader } from './Header.style'

const Header: FC = () => {
  const [localSettingsState] = useLocalSettings<LocalSettingsState>()
  const { sidebarExpanded } = localSettingsState

  log(`Header.render`)(`Sidebar: ${sidebarExpanded}`)

  return (
    <StyledHeader className={cnc('Header')} {...{ sidebarExpanded }}>
      <SidebarHandle />
      <span style={{ flex: 'auto', textAlign: 'center' }}>Header</span>
    </StyledHeader>
  )
}

export const testContent = 'Header test content'
export default withRenderingTest(memo(Header), testContent)
