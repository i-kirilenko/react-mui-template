import { FC, memo } from 'react'

import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import { useMenuItemsProps, useMenuItemsRendering } from './Menu.hooks'
import { MenuItemProps } from './Menu.types'

import { StyledMenu } from './Menu.style'

const Menu: FC = () => {
  log('Menu.render')()

  const menuItemProps: MenuItemProps[] = useMenuItemsProps()

  const renderMenuItems = useMenuItemsRendering()

  return (
    <StyledMenu className={cnc('Menu')}>
      {menuItemProps.map(renderMenuItems)}
    </StyledMenu>
  )
}

export const testContent = 'Menu test content'
export default withRenderingTest(memo(Menu), testContent)
