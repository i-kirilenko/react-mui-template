import { FC } from 'react'

import { getLogPostfix, useLayout } from 'domain/AppWrapper/LayoutContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import Menu from './Menu'

import { StyledSidebar } from './Sidebar.style'

const Sidebar: FC = () => {
  const [layoutState] = useLayout()

  log(`Sidebar-${getLogPostfix(layoutState)}.render`)()

  if (layoutState === null) return null

  return (
    <StyledSidebar
      className={cnc('Sidebar')}
      sidebarExpanded={layoutState.sidebarExpanded}
    >
      <Menu />
    </StyledSidebar>
  )
}

export const testContent = 'Sidebar test content'
export default withRenderingTest(Sidebar, testContent)
