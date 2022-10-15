import { Context, createContext } from 'react'

export type StateSetter<State extends {}> = (p: Partial<State>) => void

export type ContextValue<State extends {}> = [State, StateSetter<State>]

export const createContextWithLogger = <State extends {}>(
  initialContextValue?: ContextValue<State>,
): Context<ContextValue<State>> =>
  createContext<ContextValue<State>>(initialContextValue as ContextValue<State>)

type LogAction = (message?: string) => void
export type Logger = Record<'error' | 'success', LogAction[]>

export type ProviderPropsWithLogger<State extends {}> = {
  initialState: State
  logger?: Logger
}
