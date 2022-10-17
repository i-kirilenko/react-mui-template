import { FC } from 'react'
import { useParams } from 'react-router'

import Link from 'components/Link'
import { rootPaths } from 'constants/routes'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledIssueEditor, StyledRef } from './IssueEditor.style'

const IssueEditor: FC = () => {
  const { issueId } = useParams()

  log(`IssueEditor-${issueId}.render`)()

  return (
    <StyledIssueEditor
      header={`Edit Issue-${issueId}`}
      id={`IssueEditor-${issueId}`}
      title={`Edit Issue-${issueId}`}
    >
      <ul>
        <StyledRef>
          <Link canNotBeActive to={rootPaths.issues}>
            Back to list
          </Link>
        </StyledRef>
        <StyledRef>
          <Link canNotBeActive to={`${rootPaths.issues}/${issueId}`}>
            Cancel
          </Link>
        </StyledRef>
      </ul>
    </StyledIssueEditor>
  )
}

export const testContent = 'IssueEditor test content'
export default withRenderingTest(IssueEditor, testContent)
