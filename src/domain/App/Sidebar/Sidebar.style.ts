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
  display: flex;
  overflow-y: auto;
  align-items: center;
  flex: none;
  justify-content: center;

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
