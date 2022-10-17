import { ComponentType, FC } from 'react'
import { UseQueryResult } from 'react-query'

import { useEventsReading } from './events.hooks'
import { EventsModel } from './events.model'

export type PropsWithEventsReading<Props extends Record<string, unknown>> =
  Props & { queryResult?: UseQueryResult<EventsModel, Error> }

export const withEventsReading =
  <Props extends Record<string, unknown>>(
    Component: ComponentType<Props>,
  ): FC<PropsWithEventsReading<Props>> =>
  (props) =>
    <Component {...props} queryResult={useEventsReading()} />
