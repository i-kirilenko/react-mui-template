import { ComponentType, FC } from 'react'
import { UseQueryResult } from 'react-query'

import { useIssuesReading } from './issues.hooks'
import { IssuesModel } from './issues.model'

export type PropsWithIssuesReading<Props extends Record<string, unknown>> =
  Props & { queryResult?: UseQueryResult<IssuesModel, Error> }

export const withIssuesReading =
  <Props extends Record<string, unknown>>(
    Component: ComponentType<Props>,
  ): FC<PropsWithIssuesReading<Props>> =>
  (props) =>
    <Component {...props} queryResult={useIssuesReading()} />
