import styled from '@emotion/styled'

import {
  minWindowWidthByExpandedSidebar,
  sidebarAnimateDuration,
  sidebarWidth,
} from 'constants/layout'

const { expanded: expandedWidth, collapsed: collapsedWidth } = sidebarWidth

type Props = {
  sidebarExpanded: boolean
}

export const StyledSidebar = styled.div<Props>`
  overflow-y: auto;
  flex: none;

  width: ${expandedWidth}px;
  margin-left: ${(p) =>
    p.sidebarExpanded ? 0 : collapsedWidth - expandedWidth}px;

  transition: ${sidebarAnimateDuration}s;

  background: #343333;

  @media (max-width: ${minWindowWidthByExpandedSidebar}px) {
    width: 100%;
    margin-left: ${(p) =>
      p.sidebarExpanded ? 0 : `calc(${collapsedWidth}px - 100%)`};
  }
`
