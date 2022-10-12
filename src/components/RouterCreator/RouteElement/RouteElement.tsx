import { ComponentType, FC, LazyExoticComponent, memo, Suspense } from 'react'
import { Navigate, useLocation } from 'react-router'

import useAuth, { Role } from 'components/Auth/Auth.hooks'
import log from 'utils/log'

export type LazyComponent = LazyExoticComponent<
  ComponentType<Record<string, unknown>>
>

export type RouteElementProps = {
  component?: ComponentType
  componentProps?: Record<string, unknown>
  id: string
  lazyComponent?: LazyComponent
  loadingComponent?: ComponentType
  roles: Role[]
  signInPath: string
}

const RouteElement: FC<RouteElementProps> = (props) => {
  const {
    component: Component,
    componentProps = {},
    id,
    lazyComponent: LazyComponent,
    loadingComponent: LoadingComponent,
    roles,
    signInPath,
  } = props

  log(`RouteElement-${id}.render`)()

  const authInfo = useAuth()
  const location = useLocation()

  if (!authInfo.currentRoles.some((role) => roles.includes(role))) {
    return (
      <Navigate
        to={{ pathname: signInPath }}
        replace
        state={{ componentProps, from: location }}
      />
    )
  }

  if (Component) {
    return <Component {...componentProps} />
  }

  if (LazyComponent) {
    const fallback = LoadingComponent ? <LoadingComponent /> : null

    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...componentProps} />
      </Suspense>
    )
  }

  log(`routeCreator.${id}`, 'error')('invalid routeConfigs')
  return null
}

export default memo(RouteElement)
