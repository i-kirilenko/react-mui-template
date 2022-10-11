import { FC } from 'react'

import { useLayout } from 'domain/AppWrapper/LayoutContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import Menu from './Menu'

import { StyledSidebar } from './Sidebar.style'

const Sidebar: FC = () => {
  const { sidebarExpanded } = useLayout()

  log(`Sidebar.${sidebarExpanded ? 'expanded' : 'collapsed'}.render`)()

  return (
    <StyledSidebar className={cnc('Sidebar')} {...{ sidebarExpanded }}>
      <Menu />
    </StyledSidebar>
  )
}

export const testContent = 'Sidebar test content'
export default withRenderingTest(Sidebar, testContent)
