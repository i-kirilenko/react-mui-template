import styled from 'styled-components'

import {
  headerHeight,
  minWindowWidthByExpandedSidebar,
  sidebarAnimateDuration,
  sidebarWidth,
} from 'constants/layout'

const { collapsed } = sidebarWidth

type Props = {
  sidebarExpanded: boolean
}

export const StyledMain = styled.div<Props>`
  position: relative;

  display: flex;

  overflow-y: auto;
  align-items: center;
  flex: auto;
  flex-direction: column;
  justify-content: center;

  padding-top: ${headerHeight}px;

  transition: ${sidebarAnimateDuration}s;

  background: #1a1a1a;

  @media (max-width: ${minWindowWidthByExpandedSidebar}px) {
    width: calc(100% - ${collapsed}px);
    margin-right: ${(p) =>
      p.sidebarExpanded ? `calc(${collapsed}px - 100%)` : 0};
  }
`
