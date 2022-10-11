import { renderingTest } from 'utils/test/renderingTest'
import { MenuBranchProps, MenuItemProps } from '../Menu.types'
import Component, { testContent } from '.'

const leafProps = {
  id: 'test',
  label: 'test',
  paths: ['/test'],
  submenu: [] as MenuItemProps[],
} as MenuBranchProps

renderingTest<MenuBranchProps>(Component, testContent, leafProps)
