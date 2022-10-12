import React, {
  PropsWithChildren,
  Provider as ReactProvider,
  useCallback,
  useState,
} from 'react'

import { LayoutContext, LayoutContextValue, LayoutState } from './LayoutContext'

type LayoutContextProviderProps = { initial: LayoutState }

export const LayoutContextProvider = ({
  children,
  initial,
}: PropsWithChildren<LayoutContextProviderProps>): JSX.Element => {
  const [state, setState] = useState<LayoutState>(initial)

  const Provider = LayoutContext.Provider as ReactProvider<LayoutContextValue>

  const setPartialState = useCallback(
    (partialState: Partial<LayoutState>): void => {
      setState((prevState) => ({ ...prevState, ...partialState }))
    },
    [],
  )

  const value: LayoutContextValue = [state, setPartialState]

  return <Provider {...{ value }}>{children}</Provider>
}
