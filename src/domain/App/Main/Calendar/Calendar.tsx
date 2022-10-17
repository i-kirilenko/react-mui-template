import { FC, useEffect } from 'react'

import {
  PropsWithEventsReading,
  withEventsReading,
} from 'api/events/events.hocs'
import Loading from 'components/Loading/Loading'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledCalendar } from './Calendar.style'

type Props = {}

const Calendar: FC<PropsWithEventsReading<Props>> = ({ queryResult }) => {
  const { data: events, error, isLoading, refetch } = queryResult || {}

  useEffect(() => {
    !events && !isLoading && !error && refetch?.()
  }, [error, isLoading, events, refetch])

  if (isLoading) {
    log('IssuesIndex.loading.render')()
    return <Loading />
  }

  if (!events) {
    return null
  }

  log('Calendar.render')(`${(events || []).length} events`)

  return (
    <StyledCalendar header="Calendar" id="Calendar" title="Calendar">
      <p>Available for user- and admin-role only</p>
      <p>{`Found ${(events || []).length} events`}</p>
    </StyledCalendar>
  )
}

export const testContent = 'Calendar test content'
export default withRenderingTest(withEventsReading(Calendar), testContent)
