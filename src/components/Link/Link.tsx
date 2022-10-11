import { FC, PropsWithChildren } from 'react'
import * as React from 'react'

import { cnc } from 'utils/classNameCreator'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledButton, StyledNavLink } from 'components/Link/Link.style'

export type ButtonProps = PropsWithChildren<{
  active?: boolean
  mocked: true
  onClick?: () => void
}>

export type LinkProps = {
  canNotBeActive?: boolean
  to: string
}

export type Props = PropsWithChildren<ButtonProps | LinkProps>

const Link: FC<Props> = (props) => {
  const {
    canNotBeActive = false,
    children,
    ...navLinkProps
  } = props as PropsWithChildren<LinkProps>

  const {
    active = false,
    mocked = false,
    onClick,
  } = props as PropsWithChildren<ButtonProps>

  return mocked ? (
    <StyledButton
      className={cnc('MockedNavLink', { active, canBeActive: !canNotBeActive })}
      {...(onClick ? { onClick } : {})}
    >
      {children}
    </StyledButton>
  ) : (
    <StyledNavLink
      className={cnc('NavLink', { canBeActive: !canNotBeActive })}
      {...(navLinkProps as LinkProps)}
      end
    >
      {children}
    </StyledNavLink>
  )
}

export const testContent = 'Link test content'
export default withRenderingTest<Props>(Link, testContent)
