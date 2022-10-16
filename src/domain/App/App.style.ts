import { styled } from '@mui/material/styles'

export const StyledApp = styled('div')(({ theme }) => ({
  alignItems: 'stretch',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: 'flex',
  height: '100%',
  overflowX: 'hidden',
}))
