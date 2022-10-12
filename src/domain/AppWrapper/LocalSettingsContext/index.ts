import { useContext } from 'react'

import { ContextValue } from 'components/Logger'
import {
  LocalSettingsAbstractState,
  LocalSettingsContext,
} from './LocalSettingsContext.provider'

export const useLocalSettings = <
  State extends LocalSettingsAbstractState,
>(): ContextValue<State> =>
  useContext(LocalSettingsContext) as ContextValue<State>
