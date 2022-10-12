import { FC, memo, useCallback } from 'react'

import Link from 'components/Link'
import { minWindowWidthByExpandedSidebar } from 'constants/layout'
import { useLayout } from 'domain/AppWrapper/LayoutContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import { useWindowDimensions } from 'utils/viewport'
import { MenuLeafProps } from '../Menu.types'

import { StyledMenuLeaf } from './MenuLeaf.style'

const MenuLeaf: FC<MenuLeafProps> = ({ path, id, label }) => {
  const { width: windowWidth } = useWindowDimensions()

  log(`MenuLeaf-${id}${windowWidth ? '' : '.initial'}.render`)()

  const [layoutState, setLayoutState] = useLayout()

  const handleLinkClick = useCallback(() => {
    if (
      windowWidth &&
      windowWidth < minWindowWidthByExpandedSidebar &&
      layoutState?.sidebarExpanded
    ) {
      setLayoutState({ sidebarExpanded: false })
    }
  }, [layoutState?.sidebarExpanded, setLayoutState, windowWidth])

  return (
    <StyledMenuLeaf className={cnc('MenuLeaf')}>
      <Link to={path} onClick={handleLinkClick}>
        {label}
      </Link>
    </StyledMenuLeaf>
  )
}

export const testContent = 'MenuLeaf test content'
export default withRenderingTest(memo(MenuLeaf), testContent)
