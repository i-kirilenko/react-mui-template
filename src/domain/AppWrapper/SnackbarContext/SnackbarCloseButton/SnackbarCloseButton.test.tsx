import { renderingTest } from 'utils/test/renderingTest'
import Component, { Props, testContent } from '.'

const props: Props = {
  id: 'test',
}

renderingTest<Props>(Component, testContent, props)
