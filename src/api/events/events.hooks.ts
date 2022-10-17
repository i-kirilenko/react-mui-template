import { useQuery, UseQueryResult } from 'react-query'

import { BaseApiQueryKey } from 'api/apiConfigs'
import { useApiListeners } from 'api/listeners'
import { eventsApi, FetchEventsProps } from './events.api'
import { EventsModel } from './events.model'

export const eventsReadingQueryKey: BaseApiQueryKey = 'eventsReading'

type UseEventsReading = (
  props?: FetchEventsProps,
) => UseQueryResult<EventsModel, Error>

export const useEventsReading: UseEventsReading = (props) => {
  const { onError, onSuccess } = useApiListeners({
    baseQueryKey: eventsReadingQueryKey,
  })

  return useQuery(eventsReadingQueryKey, () => eventsApi.fetchEvents(props), {
    onError,
    onSuccess,
  }) as UseQueryResult<EventsModel, Error>
}
