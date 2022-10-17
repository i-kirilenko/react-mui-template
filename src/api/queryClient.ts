import { QueryClient } from 'react-query'
import merge from 'lodash/merge'

export const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 30, // 30 min
  },
}

const queryClient = new QueryClient({ defaultOptions })

export const queryTestClient = new QueryClient({
  defaultOptions: merge(defaultOptions, {
    queries: { retry: false, staleTime: 0 },
  }),
})

export default queryClient
