import { FC } from 'react'
import { useParams } from 'react-router'

import Link from 'components/Link'
import { issuePaths, rootPaths } from 'constants/routes'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledIssueIndex, StyledRef } from './IssueIndex.style'

const IssueIndex: FC = () => {
  const { issueId } = useParams()

  log(`IssueIndex-${issueId}.render`)()

  return (
    <StyledIssueIndex
      header={`Issue-${issueId}`}
      id={`IssueIndex-${issueId}`}
      title={`Issue-${issueId}`}
    >
      <ul>
        <StyledRef>
          <Link canNotBeActive to={rootPaths.issues}>
            Back to list
          </Link>
        </StyledRef>
        <StyledRef>
          <Link to={issuePaths.edit}>Edit</Link>
        </StyledRef>
      </ul>
    </StyledIssueIndex>
  )
}

export const testContent = 'IssueIndex test content'
export default withRenderingTest(IssueIndex, testContent)
