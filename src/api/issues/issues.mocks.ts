import { apiConfigs } from '../apiConfigs'
import { mockAdapter, withDelay } from '../axios'
import { IssuesItemDto } from './issues.dto'

const issues: IssuesItemDto[] = [
  {
    data: {
      title: 'Third issue',
    },
    id: 3,
  },
  {
    data: {
      short: 'Short description for second issue',
      title: 'Second issue',
    },
    id: 2,
  },
  {
    data: {
      title: 'First issue',
    },
    id: 1,
  },
]

apiConfigs.issuesReading &&
  mockAdapter
    .onGet(apiConfigs.issuesReading.url)
    .reply(
      withDelay([200, { issues }], apiConfigs.issuesReading.mock.timeout || 0),
    )
