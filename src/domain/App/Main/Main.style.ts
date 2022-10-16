import { styled } from '@mui/material/styles'

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

export const StyledMain = styled('div')<Props>(
  ({ sidebarExpanded, theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flex: 'auto',
    flexDirection: 'column',
    overflowY: 'auto',
    paddingTop: `${headerHeight}px`,
    position: 'relative',
    transition: `margin-right ${sidebarAnimateDuration}s ease-in-out`,

    [`@media (max-width: ${minWindowWidthByExpandedSidebar}px)`]: {
      marginRight: sidebarExpanded ? `calc(${collapsed}px - 100%)` : 0,
      width: `calc(100% - ${collapsed}px)`,
    },
  }),
)
