import styled from '@emotion/styled'

import {
  minWindowWidthByExpandedSidebar,
  sidebarAnimateDuration,
} from 'constants/layout'

const width = 48

export const StyledSidebarHandle = styled.div`
  display: flex;
  align-items: center;
  flex: none;
  justify-content: center;

  width: ${width}px;

  cursor: pointer;
  transition: ${sidebarAnimateDuration}s;

  &.expanded {
    transition: ${sidebarAnimateDuration}s;
    transform: rotate(180deg);
  }

  @media screen and (prefers-reduced-motion: reduce) {
    &.expanded {
      transition: none;
      transform: rotate(180deg);
    }
  }

  @media (max-width: ${minWindowWidthByExpandedSidebar}px) {
    margin-left: -${width}px;
  }
`
