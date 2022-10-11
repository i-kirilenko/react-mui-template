import { FC } from 'react'

import { useLayout } from 'domain/AppWrapper/LayoutContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import SidebarHandle from './SidebarHandle'

import { StyledHeader } from './Header.style'

const Header: FC = () => {
  const { sidebarExpanded } = useLayout()

  log(`Header.sidebar-${sidebarExpanded ? 'expanded' : 'collapsed'}.render`)()

  return (
    <StyledHeader className={cnc('Header')} {...{ sidebarExpanded }}>
      <SidebarHandle />
      <span style={{ flex: 'auto', textAlign: 'center' }}>Header</span>
    </StyledHeader>
  )
}

export const testContent = 'Header test content'
export default withRenderingTest(Header, testContent)
