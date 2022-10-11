import { FC, memo } from 'react'

import { useLayout } from 'domain/AppWrapper/LayoutContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledSidebarHandle } from './SidebarHandle.style'

const SidebarHandle: FC = () => {
  const { sidebarExpanded: expanded, setSidebarExpanded } = useLayout()

  log(`SidebarHandle.sidebar-${expanded ? 'expanded' : 'collapsed'}.render`)()

  return (
    <StyledSidebarHandle
      className={cnc('SidebarHandle', { expanded })}
      onClick={() => setSidebarExpanded(!expanded)}
    >
      &#5125;
    </StyledSidebarHandle>
  )
}

export const testContent = 'SidebarHandle test content'
export default withRenderingTest(memo(SidebarHandle), testContent)
