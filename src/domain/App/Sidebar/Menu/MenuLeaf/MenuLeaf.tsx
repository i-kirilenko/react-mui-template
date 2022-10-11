import { FC, memo } from 'react'

import Link from 'components/Link'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'
import { MenuLeafProps } from '../Menu.types'

import { StyledMenuLeaf } from './MenuLeaf.style'

const MenuLeaf: FC<MenuLeafProps> = ({ path, id, label }) => {
  log(`MenuLeaf-${id}.render`)()

  return (
    <StyledMenuLeaf className={cnc('MenuLeaf')}>
      <Link to={path}>{label}</Link>
    </StyledMenuLeaf>
  )
}

export const testContent = 'MenuLeaf test content'
export default withRenderingTest(memo(MenuLeaf), testContent)
