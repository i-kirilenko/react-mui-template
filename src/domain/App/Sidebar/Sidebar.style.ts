import { styled } from '@mui/material/styles'

import {
  minWindowWidthByExpandedSidebar,
  sidebarAnimateDuration,
  sidebarWidth,
} from 'constants/layout'

const { expanded: expandedWidth, collapsed: collapsedWidth } = sidebarWidth

type Props = {
  sidebarExpanded: boolean
}

export const StyledSidebar = styled('div')<Props>(
  ({ sidebarExpanded, theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    flex: 'none',
    marginLeft: `${sidebarExpanded ? 0 : collapsedWidth - expandedWidth}px`,
    overflowY: 'auto',
    transition: `margin-left ${sidebarAnimateDuration}s ease-in-out`,
    width: `${expandedWidth}px`,

    [`@media (max-width: ${minWindowWidthByExpandedSidebar}px)`]: {
      marginLeft: sidebarExpanded ? 0 : `calc(${collapsedWidth}px - 100%)`,
      width: '100%',
    },
  }),
)
