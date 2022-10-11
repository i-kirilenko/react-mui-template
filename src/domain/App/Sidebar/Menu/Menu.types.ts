import { Props as LinkProps } from 'components/Link'

type CommonMenuItemProps = LinkProps & {
  id: string
  label: string
}

export type MenuLeafProps = CommonMenuItemProps & { path: string }

export type MenuBranchProps = CommonMenuItemProps & {
  active: boolean
  paths: string[]
  submenu: MenuItemProps[]
}

export type MenuItemProps = MenuLeafProps | MenuBranchProps
