import React, {
  PropsWithChildren,
  Provider as ReactProvider,
  useState,
} from 'react'

import {
  LayoutContext,
  LayoutContextValue,
  SidebarExpanded,
} from './LayoutContext'

type LayoutContextProviderProps = {
  sidebarExpanded: boolean
}

export const LayoutContextProvider = ({
  children,
  sidebarExpanded: initialSidebarExpanded,
}: PropsWithChildren<LayoutContextProviderProps>): JSX.Element => {
  const [sidebarExpanded, setSidebarExpanded] = useState<SidebarExpanded>(
    initialSidebarExpanded,
  )

  const Provider = LayoutContext.Provider as ReactProvider<LayoutContextValue>

  const value: LayoutContextValue = {
    setSidebarExpanded,
    sidebarExpanded,
  }

  return <Provider {...{ value }}>{children}</Provider>
}
