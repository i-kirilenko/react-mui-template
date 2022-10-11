import styled from '@emotion/styled'

import {
  minWindowWidthByExpandedSidebar,
  sidebarAnimateDuration,
  sidebarWidth,
} from 'constants/layout'

const { expanded, collapsed } = sidebarWidth

type Props = {
  sidebarExpanded: boolean
}

export const StyledSidebar = styled.div<Props>`
  overflow-y: auto;
  flex: none;

  width: ${expanded}px;
  margin-left: ${(p) => (p.sidebarExpanded ? 0 : collapsed - expanded)}px;

  transition: ${sidebarAnimateDuration}s;

  background: #343333;

  @media (max-width: ${minWindowWidthByExpandedSidebar}px) {
    width: 100%;
    margin-left: ${(p) =>
      p.sidebarExpanded ? 0 : `calc(${collapsed}px - 100%)`};
  }
`
