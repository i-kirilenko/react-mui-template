import { FC } from 'react'

import { renderingTest } from 'utils/test/renderingTest'
import Component, { ButtonProps, LinkProps, testContent } from '.'

renderingTest<ButtonProps>(Component as FC<ButtonProps>, testContent, {
  mocked: true,
})

renderingTest<LinkProps>(Component as FC<LinkProps>, testContent, {
  to: '/',
})

renderingTest<LinkProps>(Component as FC<LinkProps>, testContent, {
  canNotBeActive: true,
  to: '/',
})
