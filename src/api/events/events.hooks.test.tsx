import { PropsWithChildren } from 'react'
import { setLogger, UseQueryResult } from 'react-query'
import { act, renderHook, RenderHookResult } from '@testing-library/react'

import '@testing-library/jest-dom'

import { queryTestClient } from 'api/queryClient'
import AppWrapper from 'domain/AppWrapper'
import { updateView } from 'utils/test/apiTest'
import { FetchEventsProps } from './events.api'
import { useEventsReading } from './events.hooks'
import { EventsModel } from './events.model'

// todo: fix console warnings

describe('api.useEventsReading', () => {
  type Result = UseQueryResult<EventsModel, Error>
  type Props = FetchEventsProps

  type Case = {
    expected: Partial<Result>
    id: string
    props: unknown
  }

  const cases: Case[] = [
    {
      expected: { data: [], isError: false } as Partial<Result>,
      id: '#0',
      props: { testResponse: { data: { events: [] } } },
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
      props: { testResponse: { data: { events: [{}] } } },
    },
    {
      expected: { isError: true } as Partial<Result>,
      id: '#4',
      props: {
        testResponse: {
          data: { events: [{ id: 1, title: 'title' }] },
        },
      },
    },
    {
      expected: {
        data: [
          {
            allDay: false,
            color: '#FFB020',
            description: 'Description for first event',
            end: new Date('2022-12-31T23:59:59.999Z'),
            id: 1,
            start: new Date('2022-12-31T00:00:00.000Z'),
            title: 'First event',
          },
          {
            allDay: false,
            color: '#14B8A6',
            description: 'Description for second event',
            end: new Date('2022-12-30T13:59:59.999Z'),
            id: 2,
            start: new Date('2022-12-30T03:00:00.000Z'),
            title: 'Second event',
          },
        ],
        isError: false,
      } as Partial<Result>,
      id: '#5',
      props: {
        testResponse: {
          data: {
            events: [
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
            ],
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
            () => useEventsReading(props as FetchEventsProps),
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
