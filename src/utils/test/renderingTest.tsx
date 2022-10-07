import { ComponentType } from 'react'
import { describe, expect, it } from 'vitest'

import '@testing-library/jest-dom'

import { withAppWrapper } from 'domain/AppWrapper'
import { render, screen, waitFor } from '.'

export const renderingTest = <Props extends Record<string, unknown>>(
  Component: ComponentType<Props>,
  testContent: string,
  testProps: Props = {} as Props,
) => {
  describe('Rendering', () => {
    it(`should contains '${testContent}'`, async () => {
      const ComponentWithMainWrapper = ((props: Props) =>
        withAppWrapper<Props>(Component, props)) as ComponentType

      render(<ComponentWithMainWrapper {...testProps} />)

      await waitFor(() => {
        expect(screen.getByText(testContent)).toBeInTheDocument()
      })
    })
  })
}
