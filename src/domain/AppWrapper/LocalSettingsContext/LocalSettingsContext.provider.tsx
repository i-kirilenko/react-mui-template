import React, {
  Context as ReactContext,
  PropsWithChildren,
  Provider as ReactProvider,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  ContextValue,
  createContextWithLogger,
  ProviderPropsWithLogger,
  StateSetter,
} from 'components/Logger'
import {
  restoreLocalSettingsState,
  RestoreLocalSettingsStateProps,
  saveLocalSettingsState,
  SaveLocalSettingsStateProps,
} from './LocalSettingsContext.features'

export const LocalSettingsContext = createContextWithLogger()

export type LocalSettingsAbstractState = {
  name: string | null
}

export const LocalSettingsContextProvider = <
  State extends LocalSettingsAbstractState,
>(
  props: PropsWithChildren<ProviderPropsWithLogger<State>>,
): JSX.Element => {
  const {
    children,
    initial = null,
    logger = { error: [], success: [] },
  } = props

  const [state, setState] = useState<State | null>(initial)

  const name: string | null = useMemo(
    () => (state as LocalSettingsAbstractState | null)?.name ?? null,
    [state],
  )

  const setLocalSettings: StateSetter<State> = useCallback(
    (updating: Partial<State>) => {
      const saveProps: SaveLocalSettingsStateProps<State> = {
        logger,
        state: state ?? ({} as State),
        updating,
      }

      const updatedState: State | null =
        saveLocalSettingsState<State>(saveProps)

      setState(updatedState)
    },
    [logger, state],
  )

  useEffect(() => {
    const restoreProps: RestoreLocalSettingsStateProps = { logger, name }
    const restoredState: State | null =
      restoreLocalSettingsState<State>(restoreProps)

    restoredState && setState(restoredState)
  }, [logger, name])

  const value: ContextValue<State> = [state, setLocalSettings]

  const Context: ReactContext<ContextValue<State>> =
    LocalSettingsContext as ReactContext<ContextValue<State>>

  const Provider = Context.Provider as ReactProvider<ContextValue<State>>
  return <Provider {...{ value }}>{children}</Provider>
}
