import { NavLink } from 'react-router-dom'
import type { Theme } from '@mui/material'
import { styled } from '@mui/material/styles'

const getCommonStyle = (theme: Theme) => ({
  '&.canBeActive.active': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  '&:focus': {
    textDecoration: 'underline',
  },
  '&:hover': {
    textDecoration: 'underline',
  },
  color: theme.palette.text.secondary,
  textDecoration: 'none',
})

export const StyledButton = styled('span')(({ theme }) => ({
  cursor: 'pointer',
  ...getCommonStyle(theme),
}))

export const StyledNavLink = styled(NavLink)(({ theme }) =>
  getCommonStyle(theme),
)
