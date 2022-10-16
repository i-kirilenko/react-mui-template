import styled from '@emotion/styled'

import {
  headerHeight,
  minWindowWidthByExpandedSidebar,
  sidebarAnimateDuration,
  sidebarWidth,
  zIndexes,
} from 'constants/layout'

const { expanded, collapsed } = sidebarWidth

type Props = {
  sidebarExpanded: boolean
}

export const StyledHeader = styled.div<Props>`
  position: fixed;

  z-index: ${zIndexes.header};

  top: 0;
  left: ${(p) => (p.sidebarExpanded ? expanded : collapsed)}px;

  display: flex;
  align-items: center;
  flex: none;
  justify-content: space-between;

  width: calc(100% - ${(p) => (p.sidebarExpanded ? expanded : collapsed)}px);
  height: ${headerHeight}px;

  transition: ${sidebarAnimateDuration}s ease-in-out;

  background: #424245;

  @media (max-width: ${minWindowWidthByExpandedSidebar}px) {
    left: ${(p) => (p.sidebarExpanded ? '100%' : `${collapsed}px`)};

    width: calc(100% - ${collapsed}px);
  }
`
