import { useContext } from 'react'

import { ContextValue } from 'components/Logger'
import { getLocalSettingsContext } from './LocalSettingsContext.provider'

export const useLocalSettings = <State extends {}>(): ContextValue<State> =>
  useContext(getLocalSettingsContext<State>()) as ContextValue<State>
