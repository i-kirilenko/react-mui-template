import { lazy } from 'react'

import { RouteConfig } from 'components/RouterCreator'
import { LazyComponent } from 'components/RouterCreator/RouteElement/RouteElement'
import { rootPaths, signInPath } from 'constants/routes/paths'
import Home from 'domain/App/Main/Home'
import SignIn from 'domain/App/Main/SignIn'
import issuesRouteConfig from './issues'
import projectsRouteConfig from './projects'

type RootRouteId = keyof typeof rootPaths | 'noMatch'

const rootRouteConfig: Record<RootRouteId, Omit<RouteConfig, 'signInPath'>> = {
  admin: {
    id: 'admin',
    lazyComponent: lazy(() => import('domain/App/Main/Admin')) as LazyComponent,
    path: rootPaths.admin,
    roles: ['admin'],
  },

  agile: {
    id: 'agile',
    lazyComponent: lazy(() => import('domain/App/Main/Agile')) as LazyComponent,
    path: rootPaths.agile,
    roles: ['user', 'admin'],
  },

  calendar: {
    id: 'calendar',
    lazyComponent: lazy(
      () => import('domain/App/Main/Calendar'),
    ) as LazyComponent,

    path: rootPaths.calendar,
    roles: ['user', 'admin'],
  },

  home: {
    component: Home,
    id: 'home',
    path: rootPaths.home,
    roles: ['guest', 'user', 'admin'],
  },

  issues: issuesRouteConfig,

  noMatch: {
    id: 'noMatch',
    lazyComponent: lazy(
      () => import('domain/App/Main/NoMatch'),
    ) as LazyComponent,

    path: '*',
    roles: ['guest', 'user', 'admin'],
  },

  profile: {
    id: 'profile',
    lazyComponent: lazy(
      () => import('domain/App/Main/Profile'),
    ) as LazyComponent,

    path: rootPaths.profile,
    roles: ['user', 'admin'],
  },

  projects: projectsRouteConfig,

  signIn: {
    component: SignIn,
    id: 'signIn',
    path: rootPaths.signIn,
    roles: ['guest'],
  },

  signOut: {
    id: 'signOut',
    lazyComponent: lazy(
      () => import('domain/App/Main/SignOut'),
    ) as LazyComponent,

    path: rootPaths.signOut,
    roles: ['user', 'admin'],
  },

  signUp: {
    id: 'signUp',
    lazyComponent: lazy(
      () => import('domain/App/Main/SignUp'),
    ) as LazyComponent,

    path: rootPaths.signUp,
    roles: ['guest'],
  },

  wbs: {
    id: 'wbs',
    lazyComponent: lazy(() => import('domain/App/Main/Wbs')) as LazyComponent,
    path: rootPaths.wbs,
    roles: ['admin'],
  },
}

export default (Object.keys(rootRouteConfig) as RootRouteId[]).reduce(
  (acc, cur) =>
    ({
      ...acc,
      [cur]: { ...rootRouteConfig[cur], signInPath },
    } as Record<RootRouteId, RouteConfig>),
  {} as Record<RootRouteId, RouteConfig>,
)
