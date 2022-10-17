import { lazy } from 'react'

import { RouteConfig } from 'components/RouterCreator'
import { LazyComponent } from 'components/RouterCreator/RouteElement'
import { issuePaths, issuesPaths, signInPath } from 'constants/routes/paths'
import Issue from 'domain/App/Main/Issues/Issue'

const issueEditor: RouteConfig = {
  id: 'issueEditor',
  lazyComponent: lazy(
    () => import('domain/App/Main/Issues/Issue/IssueEditor'),
  ) as LazyComponent,

  // loadingComponent: () => <Loading />, // - use for heavy component only
  path: issuePaths.edit,
  roles: ['admin', 'user'],
  signInPath,
}

const issueIndex: RouteConfig = {
  id: 'issueIndex',
  index: true, // - without path
  lazyComponent: lazy(
    () => import('domain/App/Main/Issues/Issue/IssueIndex'),
  ) as LazyComponent,

  roles: ['admin', 'user'],
  signInPath,
}

const issueRouteConfig: RouteConfig = {
  component: Issue, // - without lazy of outlet
  id: 'issue',
  nestedRouteConfigs: [issueEditor, issueIndex],
  path: issuesPaths.issue,
  roles: ['admin', 'user'],
  signInPath,
}

export default issueRouteConfig
