import { AxiosInstance, AxiosResponse } from 'axios'

import { apiConfigs } from '../apiConfigs'
import { getAxiosInstance } from '../axios'
import { IssuesDto } from './issues.dto'
import { issuesDtoParser } from './issues.dtoParser'
import { IssuesModel } from './issues.model'

export type FetchIssuesProps = {
  testResponse?: AxiosResponse<IssuesDto>
}

export const issuesApi = Object.freeze({
  async fetchIssues(props?: FetchIssuesProps): Promise<IssuesModel> {
    const url = apiConfigs.issuesReading?.url
    if (!url) {
      throw Error()
    }

    const axiosInstance: AxiosInstance = getAxiosInstance(
      apiConfigs.issuesReading!,
    )

    const response: AxiosResponse<IssuesDto> =
      props?.testResponse || (await axiosInstance.get(url))

    const issues = issuesDtoParser(response.data)
    if (!Array.isArray(issues)) {
      throw Error()
    }

    return issues
  },
})
