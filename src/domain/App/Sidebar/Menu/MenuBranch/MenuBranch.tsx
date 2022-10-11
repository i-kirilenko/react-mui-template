import { FC, memo, useCallback, useState } from 'react'

import Link from 'components/Link'
import withLocation, {
  PropsWithLocation,
} from 'components/RouterCreator/RouterCreator.hocs'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
// Dependency cycle for recursion: MenuBranch -> MenuLeaf -> MenuBranch
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import { useMenuItemsRendering } from '../Menu.hooks' // eslint-disable-line import/no-cycle
import { MenuBranchProps } from '../Menu.types'

import { StyledMenuBranch, StyledSubMenu } from './MenuBranch.style'

const MenuBranch: FC<MenuBranchProps> = (props) => {
  const { active, id, label, submenu } = props
  log(`MenuBranch-${id}.render`)('active', active)

  const [expanded, setExpanded] = useState<boolean>(active)

  const renderMenuItems = useMenuItemsRendering()

  const handleExpanderClick = useCallback(() => {
    setExpanded((prev) => !prev)
  }, [])

  return (
    <StyledMenuBranch className={cnc('MenuBranch')}>
      <Link {...{ active, id, label }} mocked onClick={handleExpanderClick}>
        {label}
      </Link>
      <StyledSubMenu className={cnc('SubMenu')} {...{ expanded }}>
        <ul>{submenu.map(renderMenuItems)}</ul>
      </StyledSubMenu>
    </StyledMenuBranch>
  )
}

const cb = ({
  location,
  ...props
}: PropsWithLocation<MenuBranchProps>): MenuBranchProps => ({
  ...props,
  active: props.paths.includes(location.pathname),
})

export const testContent = 'MenuBranch test content'
export default withRenderingTest(
  withLocation(memo(MenuBranch), cb),
  testContent,
)
