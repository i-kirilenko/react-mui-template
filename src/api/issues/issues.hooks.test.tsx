import { PropsWithChildren } from 'react'
import { setLogger, UseQueryResult } from 'react-query'
import { act, renderHook, RenderHookResult } from '@testing-library/react'

import '@testing-library/jest-dom'

import { queryTestClient } from 'api/queryClient'
import AppWrapper from 'domain/AppWrapper'
import { updateView } from 'utils/test/apiTest'
import { FetchIssuesProps } from './issues.api'
import { useIssuesReading } from './issues.hooks'
import { IssuesModel } from './issues.model'

// todo: fix console warnings

describe('api.useIssuesReading', () => {
  type Result = UseQueryResult<IssuesModel, Error>
  type Props = FetchIssuesProps

  type Case = {
    expected: Partial<Result>
    id: string
    props: unknown
  }

  const cases: Case[] = [
    {
      expected: { data: [], isError: false } as Partial<Result>,
      id: '#0',
      props: { testResponse: { data: { issues: [] } } },
    },
    {
      expected: { isError: true } as Partial<Result>,
      id: '#1',
      props: { testResponse: {} },
    },
    {
      expected: { isError: true } as Partial<Result>,
      id: '#2',
      props: { testResponse: { data: {} } },
    },
    {
      expected: { isError: true } as Partial<Result>,
      id: '#3',
      props: { testResponse: { data: { issues: [{}] } } },
    },
    {
      expected: { isError: true } as Partial<Result>,
      id: '#4',
      props: {
        testResponse: {
          data: {
            issues: [{ id: 1, title: 'title' }],
          },
        },
      },
    },
    {
      expected: {
        data: [{ announce: null, id: 1, subject: 'title' }],
        isError: false,
      } as Partial<Result>,
      id: '#5',
      props: {
        testResponse: {
          data: {
            issues: [{ data: { title: 'title' }, id: 1 }],
          },
        },
      },
    },
  ]

  setLogger({
    error: () => {},
    log: console.log, // eslint-disable-line no-console
    warn: console.warn, // eslint-disable-line no-console
  })

  cases.forEach(({ expected, id, props }: Case) => {
    it(`Case ${id}: should return expected data and isError`, async () => {
      const { result } = await (async () => {
        let hook: RenderHookResult<Result, Props>
        await act(async () => {
          hook = renderHook<Result, Props>(
            () => useIssuesReading(props as FetchIssuesProps),
            {
              wrapper: ({ children }: PropsWithChildren) => (
                <AppWrapper isTest>{children}</AppWrapper>
              ),
            },
          )
        })

        // @ts-ignore
        return hook
      })()

      await updateView(result)

      const { data, isError } = result.current
      expect({ data, isError }).toEqual(expected)
      queryTestClient.clear()
    })
  })
})
