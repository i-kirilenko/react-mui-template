import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'

const activeStyle = `
  &.active {
    text-decoration: none;

    color: lightgray;
  }
`

const commonStyle = `
  text-decoration: none;
  color: lightskyblue;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
  
  &.canBeActive {
    ${activeStyle}
  }
`

export const StyledButton = styled.span`
  cursor: pointer;
  ${commonStyle}
`

export const StyledNavLink = styled(NavLink)`
  ${commonStyle}
`
