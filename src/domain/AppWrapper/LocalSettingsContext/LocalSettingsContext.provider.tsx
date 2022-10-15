import React, {
  Context as ReactContext,
  PropsWithChildren,
  Provider as ReactProvider,
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  ContextValue,
  createContextWithLogger,
  ProviderPropsWithLogger,
  StateSetter,
} from 'components/Logger'
import log from 'utils/log'
import {
  restoreLocalSettingsState,
  saveLocalSettingsState,
  SaveLocalSettingsStateProps,
} from './LocalSettingsContext.features'

export const LocalSettingsContext = createContextWithLogger()

export const getLocalSettingsContext = <State extends {}>() =>
  LocalSettingsContext as unknown as ReactContext<ContextValue<State>>

export type LocalSettingsAbstractState = {
  name: string | null
}

export type LocalSettingsContextProviderProps<State extends {}> =
  PropsWithChildren<ProviderPropsWithLogger<State> & LocalSettingsAbstractState>

const LocalSettingsContextProvider = <State extends {}>(
  props: LocalSettingsContextProviderProps<State>,
): JSX.Element => {
  const {
    children,
    initialState,
    logger = { error: [], success: [] },
    name = null,
  } = props

  const [state, setState] = useState<State>(initialState)

  log(
    `LocalSettingsContextProvider.${
      state === initialState ? 'initial' : 'existed'
    }-state.render`,
  )()

  const setLocalSettings: StateSetter<State> = useCallback(
    (updating: Partial<State>) => {
      const saveProps: SaveLocalSettingsStateProps<State> = {
        logger,
        name,
        state,
        updating,
      }

      setState(saveLocalSettingsState<State>(saveProps))
    },
    [logger, name, state],
  )

  useEffect(() => {
    setState(
      restoreLocalSettingsState<State>({
        logger,
        name,
      }) ?? initialState,
    )
  }, [initialState, logger, name])

  const value: ContextValue<State> = [state, setLocalSettings]

  const Context: ReactContext<ContextValue<State>> =
    getLocalSettingsContext<State>()

  const Provider = Context.Provider as ReactProvider<ContextValue<State>>
  return <Provider {...{ value }}>{children}</Provider>
}

export default LocalSettingsContextProvider
