import { ComponentType } from 'react'

import AppWrapper from './AppWrapper'

export const withAppWrapper = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
  props: Props = {} as Props,
) => (
  <AppWrapper>
    <Component {...props} />
  </AppWrapper>
)

export { default } from './AppWrapper'
