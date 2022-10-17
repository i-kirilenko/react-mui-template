import { useQuery, UseQueryResult } from 'react-query'

import { BaseApiQueryKey } from '../apiConfigs'
import { useApiListeners } from '../listeners'
import { FetchIssuesProps, issuesApi } from './issues.api'
import { IssuesModel } from './issues.model'

export const issuesReadingQueryKey: BaseApiQueryKey = 'issuesReading'

type UseIssuesReading = (
  props?: FetchIssuesProps,
) => UseQueryResult<IssuesModel, Error>

export const useIssuesReading: UseIssuesReading = (props) => {
  const { onError, onSuccess } = useApiListeners({
    baseQueryKey: issuesReadingQueryKey,
  })

  return useQuery(issuesReadingQueryKey, () => issuesApi.fetchIssues(props), {
    enabled: !!props?.testResponse,
    onError,
    onSuccess,
  }) as UseQueryResult<IssuesModel, Error>
}
