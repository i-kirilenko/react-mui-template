import { lazy } from 'react'

import { RouteConfig } from 'components/RouterCreator'
import { LazyComponent } from 'components/RouterCreator/RouteElement'
import { rootPaths, signInPath } from 'constants/routes/paths'
import Issues from 'domain/App/Main/Issues'
import issueRouteConfig from './issue'

const issuesIndex: RouteConfig = {
  id: 'issuesIndex',
  index: true, // - without path
  lazyComponent: lazy(
    () => import('domain/App/Main/Issues/IssuesIndex'),
  ) as LazyComponent,

  roles: ['admin', 'user'],
  signInPath,
}

const issuesRouteConfig: Omit<RouteConfig, 'signInPath'> = {
  component: Issues, // - without lazy of outlet
  id: 'issues',
  nestedRouteConfigs: [issuesIndex, issueRouteConfig],
  path: rootPaths.issues,
  roles: ['admin', 'user'],
}

export default issuesRouteConfig
