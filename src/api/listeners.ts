import { useSnackbar } from 'notistack'

import log from 'utils/log'
import { apiConfigs, BaseApiQueryKey } from './apiConfigs'

const getDefaultErrorMessage = (queryKey: string) =>
  `Error by data-receiving, -posting or -parsing of the ${queryKey}`

type ApiListener = () => void

export const useApiListeners = (props: {
  baseQueryKey: BaseApiQueryKey
  queryKeyParams?: (string | number)[]
}): { onError: ApiListener; onSuccess: ApiListener } => {
  const { baseQueryKey, queryKeyParams = [] } = props

  const { enqueueSnackbar } = useSnackbar()

  const messages = apiConfigs[baseQueryKey].getMessages(...queryKeyParams)

  const loggerKeyPrefix = `API.${
    baseQueryKey + (queryKeyParams.length ? '.' : '') + queryKeyParams.join('.')
  }`

  return {
    onError() {
      log(`${loggerKeyPrefix}.error`, 'error')()

      enqueueSnackbar(messages.error || getDefaultErrorMessage(baseQueryKey), {
        variant: 'error',
      })
    },

    onSuccess() {
      log(`${loggerKeyPrefix}.success`, 'success')()

      messages.success &&
        enqueueSnackbar(messages.success, { variant: 'success' })
    },
  }
}
