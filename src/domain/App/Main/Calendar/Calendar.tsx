import { FC } from 'react'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledCalendar } from './Calendar.style'

const Calendar: FC = () => {
  log('Calendar.render')()

  return (
    <StyledCalendar header="Calendar" id="Calendar" title="Calendar">
      <p>Available for user- and admin-role only</p>
    </StyledCalendar>
  )
}

export const testContent = 'Calendar test content'
export default withRenderingTest(Calendar, testContent)
