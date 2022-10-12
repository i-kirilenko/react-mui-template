import { createContext } from 'react'

export type LayoutState = {
  sidebarExpanded: boolean
}

export type LayoutContextValue = [
  LayoutState | null,
  (p: Partial<LayoutState>) => void,
]

const initialLayoutContextValue: LayoutContextValue = [null, () => {}]

export const LayoutContext = createContext<LayoutContextValue>(
  initialLayoutContextValue as LayoutContextValue,
)
