import cn, { Argument } from 'classnames'

import env from 'constants/env'

const classNameCreator = !env.debugClassNameEnabled
  ? cn
  : (name: string, ...args: Argument[]) => cn(...args, `__${name}__`)

export default classNameCreator
