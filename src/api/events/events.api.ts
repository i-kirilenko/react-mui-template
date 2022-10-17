import { AxiosInstance, AxiosResponse } from 'axios'

import { apiConfigs } from '../apiConfigs'
import { getAxiosInstance } from '../axios'
import { EventsDto } from './events.dto'
import { eventsDtoParser } from './events.dtoParser'
import { EventsModel } from './events.model'

export type FetchEventsProps = {
  testResponse?: AxiosResponse<EventsDto>
}

export const eventsApi = Object.freeze({
  async fetchEvents(props?: FetchEventsProps): Promise<EventsModel> {
    const url = apiConfigs.eventsReading?.url
    if (!url) {
      throw Error()
    }

    const axiosInstance: AxiosInstance = getAxiosInstance(
      apiConfigs.eventsReading!,
    )

    const response: AxiosResponse<EventsDto> =
      props?.testResponse || (await axiosInstance.get(url))

    const events = eventsDtoParser(response.data)
    if (!Array.isArray(events)) {
      throw Error()
    }

    return events
  },
})
