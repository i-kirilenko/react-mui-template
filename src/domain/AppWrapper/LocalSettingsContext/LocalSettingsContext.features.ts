import { Logger } from 'components/Logger'

export type RestoreLocalSettingsStateProps = {
  logger: Logger
  name: string | null
}

export const restoreLocalSettingsState = <State extends {}>({
  logger,
  name,
}: RestoreLocalSettingsStateProps): State | null => {
  try {
    const localSettingsRawState: string | null = name
      ? localStorage.getItem(name)
      : null

    const state = (
      localSettingsRawState ? JSON.parse(localSettingsRawState) : null
    ) as State | null

    const status = state ? 'exist' : 'not exist'
    logger.success?.forEach((logAction) => logAction(status))

    return state
  } catch (e) {
    logger.error?.forEach((logAction) =>
      logAction('Error by restoring data from local storage'),
    )

    return null
  }
}

export type SaveLocalSettingsStateProps<State extends {}> = {
  logger: Logger
  state: State
  updating?: Partial<State>
}
export const saveLocalSettingsState = <State extends {}>(
  props: SaveLocalSettingsStateProps<State>,
): State | null => {
  const { logger, state, updating = {} } = props
  try {
    const updatedState: { name?: string } & State = {
      ...state,
      ...updating,
    }

    !updatedState.name && new Error('Local storage name is required')
    localStorage.setItem(updatedState.name!, JSON.stringify(updatedState))
    logger.success?.forEach((logAction) => logAction())

    return updatedState
  } catch (e) {
    logger.error?.forEach((logAction) =>
      logAction('Error by updating data in local storage'),
    )

    return null
  }
}
