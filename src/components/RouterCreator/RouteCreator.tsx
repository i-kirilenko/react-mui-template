import { FC } from 'react'
import { Route, RouteProps } from 'react-router'

import RouteElement, { RouteElementProps } from './RouteElement'

export type RouteConfig = {
  nestedRouteConfigs?: RouteConfig[]
  path?: string
} & RouteProps &
  RouteElementProps

const RouteCreator: FC<RouteConfig> = (props: RouteConfig) => {
  const { index, nestedRouteConfigs, path, ...routeElementProps } = props
  const { id: key } = props
  const routeProps = {
    element: <RouteElement {...routeElementProps} />,
    index,
    path,
  }

  return (
    // @ts-ignore
    <Route key={key} {...routeProps}>
      {nestedRouteConfigs && nestedRouteConfigs.map(RouteCreator)}
    </Route>
  )
}

export default RouteCreator
