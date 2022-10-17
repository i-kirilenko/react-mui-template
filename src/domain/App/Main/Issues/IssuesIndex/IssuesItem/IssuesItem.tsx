import { FC } from 'react'

import { IssuesItemModel } from 'api/issues/issues.model'
import Link from 'components/Link'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledIssuesItem } from './IssuesItem.style'

export type Props = IssuesItemModel & {}

const IssuesItem: FC<Props> = ({ announce, id, subject }) => {
  log(`IssuesItem-${id}.render`)()

  return (
    <StyledIssuesItem>
      <Link to={`${id}`}>{subject}</Link>
      {announce ? <p>{announce}</p> : null}
    </StyledIssuesItem>
  )
}

export const testContent = 'IssuesItem test content'
export default withRenderingTest<Props>(IssuesItem, testContent)
