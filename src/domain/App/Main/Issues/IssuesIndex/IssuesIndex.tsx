import { FC, useEffect } from 'react'

import { PropsWithIssuesReading, withIssuesReading } from 'api/issues'
import Link from 'components/Link'
import Loading from 'components/Loading'
import { issuesPaths } from 'constants/routes'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import IssuesItem from './IssuesItem'

import { StyledIssuesIndex } from './IssuesIndex.style'

type IssuesIndexProps = {}

const IssuesIndex: FC<PropsWithIssuesReading<IssuesIndexProps>> = ({
  queryResult,
}) => {
  const { data: issues, error, isLoading, refetch } = queryResult || {}

  useEffect(() => {
    !issues && !isLoading && !error && refetch?.()
  }, [error, isLoading, issues, refetch])

  if (isLoading) {
    log('IssuesIndex.loading.render')()
    return <Loading />
  }

  if (!issues) {
    return null
  }

  log('IssuesIndex.loaded.render')(`${(issues || []).length} issues`)

  return (
    <StyledIssuesIndex header="Issues" id="IssuesIndex" title="Issues">
      <p>Available for user- and admin-role only</p>
      <p>
        <Link mocked onClick={refetch}>
          Update
        </Link>
      </p>
      <p>
        <Link to={issuesPaths.add}>Add</Link>
      </p>
      <ul>
        {(issues || []).map((p) => (
          <IssuesItem key={p.id} {...p} />
        ))}
      </ul>
    </StyledIssuesIndex>
  )
}

export const testContent = 'IssuesIndex test content'
export default withRenderingTest(withIssuesReading(IssuesIndex), testContent)
