import { renderingTest } from 'utils/test/renderingTest'
import { MenuLeafProps } from '../Menu.types'
import Component, { testContent } from '.'

const leafProps = {
  id: 'test',
  label: 'test',
  path: '/',
} as MenuLeafProps

renderingTest<MenuLeafProps>(Component, testContent, leafProps)
