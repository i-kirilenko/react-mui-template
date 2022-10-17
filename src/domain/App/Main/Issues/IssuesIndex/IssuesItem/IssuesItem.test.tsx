import { renderingTest } from 'utils/test/renderingTest'
import Component, { Props, testContent } from '.'

const props: Props = {
  announce: null,
  id: 1,
  subject: 'test',
}

renderingTest<Props>(Component, testContent, props)
