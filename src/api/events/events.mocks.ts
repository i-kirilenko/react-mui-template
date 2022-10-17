import { apiConfigs } from '../apiConfigs'
import { mockAdapter, withDelay } from '../axios'
import { EventsItemDto } from './events.dto'

const events: EventsItemDto[] = [
  {
    allDay: false,
    color: '#FFB020',
    description: 'Description for first event',
    end: '2022-12-31T23:59:59.999Z',
    id: 1,
    start: '2022-12-31T00:00:00.000Z',
    title: 'First event',
  },
  {
    allDay: false,
    color: '#14B8A6',
    description: 'Description for second event',
    end: '2022-12-30T13:59:59.999Z',
    id: 2,
    start: '2022-12-30T03:00:00.000Z',
    title: 'Second event',
  },
  {
    allDay: true,
    color: '#FFB020',
    description: 'Description for third event',
    end: '2022-12-28T23:59:59.999Z',
    id: 3,
    start: '2022-12-01T00:00:00.000Z',
    title: 'Third event',
  },
]

apiConfigs.eventsReading &&
  mockAdapter
    .onGet(apiConfigs.eventsReading.url)
    .reply(
      withDelay([200, { events }], apiConfigs.eventsReading.mock.timeout || 0),
    )
