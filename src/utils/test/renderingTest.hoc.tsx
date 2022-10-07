import { ComponentType } from 'react'

import env from 'constants/env'

export const withRenderingTest = <
  Props extends Record<string | number, unknown>,
>(
  Component: ComponentType<Props>,
  testContent: string,
): ComponentType<Props> => {
  if (!env.testEnabled) {
    return Component
  }

  return (props: Props) => (
    <>
      <Component {...props} />
      <div style={{ display: 'none' }}>{testContent}</div>
    </>
  )
}
