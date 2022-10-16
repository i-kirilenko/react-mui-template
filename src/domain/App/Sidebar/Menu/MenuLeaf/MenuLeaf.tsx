import { FC, memo, useCallback } from 'react'

import Link from 'components/Link'
import { minWindowWidthByExpandedSidebar } from 'constants/layout'
import { LocalSettingsState } from 'domain/AppWrapper/AppWrapper.adapter.LocalSettingsContext'
import { useLocalSettings } from 'domain/AppWrapper/LocalSettingsContext'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import { useWindowDimensions } from 'utils/viewport'
import { MenuLeafProps } from '../Menu.types'

import { StyledMenuLeaf } from './MenuLeaf.style'

const MenuLeaf: FC<MenuLeafProps> = ({ path, id, label }) => {
  const { width: windowWidth } = useWindowDimensions()

  const [localSettingsState, setLocalSettingsState] =
    useLocalSettings<LocalSettingsState>()

  const { sidebarExpanded } = localSettingsState

  log(`MenuLeaf-${id}.${windowWidth}.render`)(sidebarExpanded)

  const handleLinkClick = useCallback(() => {
    if (
      windowWidth &&
      windowWidth < minWindowWidthByExpandedSidebar &&
      sidebarExpanded
    ) {
      setLocalSettingsState({ sidebarExpanded: false })
    }
  }, [setLocalSettingsState, sidebarExpanded, windowWidth])

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
