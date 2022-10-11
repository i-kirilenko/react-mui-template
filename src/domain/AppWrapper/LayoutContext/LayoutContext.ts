import { Context, createContext } from 'react'

export type SidebarExpanded = boolean

export type LayoutContextValue = {
  setSidebarExpanded: (p: SidebarExpanded) => void
  sidebarExpanded: SidebarExpanded
}

const initialLayoutContextValue: LayoutContextValue = {
  setSidebarExpanded: () => {},
  sidebarExpanded: false,
}

export const LayoutContext = ((): Context<LayoutContextValue> =>
  createContext<LayoutContextValue>(
    initialLayoutContextValue as LayoutContextValue,
  ))()
