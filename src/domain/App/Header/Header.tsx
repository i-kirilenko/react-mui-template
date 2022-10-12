import { FC } from 'react'

import { getLogPostfix, useLayout } from 'domain/AppWrapper/LayoutContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import SidebarHandle from './SidebarHandle'

import { StyledHeader } from './Header.style'

const Header: FC = () => {
  const [layoutState] = useLayout()

  log(`Header.sidebar-${getLogPostfix(layoutState)}.render`)()

  if (layoutState === null) return null

  return (
    <StyledHeader
      className={cnc('Header')}
      sidebarExpanded={layoutState.sidebarExpanded}
    >
      <SidebarHandle />
      <span style={{ flex: 'auto', textAlign: 'center' }}>Header</span>
    </StyledHeader>
  )
}

export const testContent = 'Header test content'
export default withRenderingTest(Header, testContent)
