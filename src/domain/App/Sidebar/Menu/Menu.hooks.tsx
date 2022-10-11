import { useCallback, useMemo } from 'react'

import useAuth, { Role, roles } from 'components/Auth/Auth.hooks'
import { MenuPoint, menuPoints } from './Menu.constants'
import { MenuBranchProps, MenuItemProps, MenuLeafProps } from './Menu.types'
// Dependency cycle for recursion: MenuBranch -> MenuLeaf -> MenuBranch
import MenuBranch from './MenuBranch' // eslint-disable-line import/no-cycle
import MenuLeaf from './MenuLeaf'

export type FillPathsForBranchResult = {
  children: MenuItemProps[]
  paths: string[]
}

export const fillPathsForBranch = (
  children: MenuItemProps[],
): FillPathsForBranchResult =>
  children.reduce(
    (acc, child) => {
      const { submenu = [] } = child as MenuBranchProps
      const { path } = child as MenuLeafProps

      if (path) {
        acc.paths.push(path)
        acc.children.push(child)
        return acc
      }

      const { children: newSubmenu, paths: submenuPaths } =
        fillPathsForBranch(submenu)

      acc.paths.push(...submenuPaths)
      acc.children.push({
        ...child,
        paths: submenuPaths,
        submenu: newSubmenu,
      } as MenuBranchProps)

      return acc
    },
    {
      children: [] as MenuItemProps[],
      paths: [] as string[],
    },
  )

export type GetMenuItemProps = {
  availableRoles: Role[]
  currentRoles: Role[]
  menuPoints: MenuPoint[]
}

export const getMenuItemProps = (props: GetMenuItemProps): MenuItemProps[] => {
  const { availableRoles, currentRoles, menuPoints: points } = props

  if (!availableRoles.length || !currentRoles.length || !points.length) {
    return []
  }

  const ensureSomeCurrentRoleInMenuPoint = (menuPoint: MenuPoint): boolean =>
    currentRoles.some(
      (currentRole) =>
        (!menuPoint.routeConfig && menuPoint.submenuPoints) ||
        menuPoint.routeConfig!.roles.includes(currentRole),
    )

  const mapMenuPointToMenuItemProps = (menuPoint: MenuPoint): MenuItemProps => {
    const { id, label, routeConfig, submenuPoints } = menuPoint

    if (routeConfig?.path) {
      return {
        id,
        label,
        path: routeConfig.path,
      } as MenuLeafProps
    }

    const submenu: MenuItemProps[] = getMenuItemProps({
      ...props,
      menuPoints: submenuPoints || [],
    })

    return { id, label, submenu } as MenuBranchProps
  }

  const ensureHasNotEmptySubmenu = (menuItemProps: MenuItemProps) => {
    const { submenu } = menuItemProps as MenuBranchProps
    return !(submenu && !submenu.length)
  }

  const menuItemPropsListWithoutPathForBranch = points
    .filter(ensureSomeCurrentRoleInMenuPoint)
    .map(mapMenuPointToMenuItemProps)
    .filter(ensureHasNotEmptySubmenu)

  return fillPathsForBranch(menuItemPropsListWithoutPathForBranch).children
}

export const useMenuItemsProps = (): MenuItemProps[] => {
  const { currentRoles } = useAuth()

  return useMemo(
    () =>
      getMenuItemProps({
        availableRoles: roles as Role[],
        currentRoles,
        menuPoints,
      }),
    [currentRoles],
  )
}

export const useMenuItemsRendering = () =>
  useCallback((props: MenuItemProps) => {
    const branchProps = props as MenuBranchProps
    const leafProps = props as MenuLeafProps
    return leafProps.path ? (
      <MenuLeaf key={leafProps.id} {...leafProps} />
    ) : (
      <MenuBranch
        key={branchProps.id}
        {...branchProps}
        submenu={branchProps.submenu || []}
      />
    )
  }, [])
