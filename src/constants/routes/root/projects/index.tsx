import { lazy } from 'react'

import { RouteConfig } from 'components/RouterCreator'
import { LazyComponent } from 'components/RouterCreator/RouteElement/RouteElement'
import { rootPaths } from 'constants/routes/paths'

const projectsRouteConfig: Omit<RouteConfig, 'signInPath'> = {
  id: 'projects',
  lazyComponent: lazy(
    () => import('domain/App/Main/Projects'),
  ) as LazyComponent,

  path: rootPaths.projects,
  roles: ['admin', 'user'],
}

export default projectsRouteConfig
