import { FC } from 'react'

import { defaultSidebarExpanded } from 'constants/layout'
import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import SidebarHandle from './SidebarHandle'

import { Props as StyledHeaderProps, StyledHeader } from './Header.style'

const Header: FC = () => {
  const [localSettingsState] = useLocalSettings<LocalSettingsState>()
  const { sidebarExpanded = null } = localSettingsState || {}

  log(`Header${sidebarExpanded === null ? '.initial' : ''}.render`)(
    sidebarExpanded,
  )

  const styledHeaderProps: StyledHeaderProps = {
    sidebarExpanded: sidebarExpanded ?? defaultSidebarExpanded,
  }

  return (
    <StyledHeader className={cnc('Header')} {...styledHeaderProps}>
      <SidebarHandle />
      <span style={{ flex: 'auto', textAlign: 'center' }}>Header</span>
    </StyledHeader>
  )
}

export const testContent = 'Header test content'
export default withRenderingTest(Header, testContent)
