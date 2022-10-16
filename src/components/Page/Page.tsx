import { FC, PropsWithChildren, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Typography } from '@mui/material'

import env from 'constants/env'
import { cnc } from 'utils/classNameCreator'
import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

import { StyledPage } from './Page.style'

type PageProps = {
  className?: string
  header?: string
  id: string
  title?: string
}

export type Props = PropsWithChildren<PageProps>

const Page: FC<Props> = (props) => {
  const { children, className = '', header, id, title } = props

  const fullTitle = useMemo(
    () =>
      title ? `${env.projectPublicName} (${title})` : env.projectPublicName,
    [title],
  )

  log(`Page-${id}.render`)()

  return (
    <StyledPage className={cnc(id, { [className]: !!className })}>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      {!!header && <Typography variant="h1">{header}</Typography>}
      {children}
    </StyledPage>
  )
}

export const testContent = 'Page test content'
export default withRenderingTest(Page, testContent)
