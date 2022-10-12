import { FC, memo } from 'react'

import { getLogPostfix, useLayout } from 'domain/AppWrapper/LayoutContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledSidebarHandle } from './SidebarHandle.style'

const SidebarHandle: FC = () => {
  const [layoutState, setLayoutState] = useLayout()

  log(`SidebarHandle.sidebar-${getLogPostfix(layoutState)}.render`)()

  if (layoutState === null) return null

  return (
    <StyledSidebarHandle
      className={cnc('SidebarHandle', {
        expanded: layoutState.sidebarExpanded,
      })}
      onClick={() =>
        setLayoutState({ sidebarExpanded: !layoutState.sidebarExpanded })
      }
    >
      &#5125;
    </StyledSidebarHandle>
  )
}

export const testContent = 'SidebarHandle test content'
export default withRenderingTest(memo(SidebarHandle), testContent)
