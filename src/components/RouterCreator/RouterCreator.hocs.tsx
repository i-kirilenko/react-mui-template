import { ComponentType, FC, useMemo } from 'react'
import { Location, useLocation } from 'react-router'

export type PropsWithLocation<Props extends Record<string, unknown>> = Props & {
  location: Location
}

const withLocation =
  <Props extends Record<string, unknown>>(
    Component: ComponentType<Props>,
    callback: (p: PropsWithLocation<Props>) => Props,
  ): FC<Props> =>
  (props: Props) => {
    const location = useLocation()

    const propsUpdatedByLocationChange = useMemo(
      () => ({ ...props, ...callback({ ...props, location }) }),
      [location, props],
    )

    return <Component {...propsUpdatedByLocationChange} />
  }

export default withLocation
