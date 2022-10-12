import { useContext } from 'react'

import { LayoutContext, LayoutContextValue, LayoutState } from './LayoutContext'

export const useLayout = (): LayoutContextValue =>
  useContext<LayoutContextValue>(LayoutContext)

export const getLogPostfix = (state: LayoutState | null): string => {
  if (state === null) return 'initial'
  return state.sidebarExpanded ? 'expanded' : 'collapsed'
}
