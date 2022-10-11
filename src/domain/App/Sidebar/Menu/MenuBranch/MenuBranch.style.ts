import styled from '@emotion/styled'

export const StyledMenuBranch = styled.li`
  padding: 0.5rem 0;

  list-style: none;
`

type Props = {
  expanded: boolean
}

export const StyledSubMenu = styled.ul<Props>`
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};

  padding: 0.5rem 0;
`
