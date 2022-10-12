import { FC, memo } from 'react'
import IconClose from '@mui/icons-material/Close'
import { IconButton as MuiIconButton } from '@mui/material'
import { SnackbarKey, useSnackbar } from 'notistack'

import log from 'utils/log'
import { withRenderingTest } from 'utils/test/renderingTest.hoc'

export type Props = { id: SnackbarKey }

const SnackbarCloseButton: FC<Props> = ({ id }) => {
  log(`SnackbarCloseButton.render.${id}`)()

  const { closeSnackbar } = useSnackbar()

  return (
    <MuiIconButton onClick={() => closeSnackbar(id)}>
      <IconClose />
    </MuiIconButton>
  )
}

export const testContent = 'SnackbarCloseButton test content'
export default withRenderingTest<Props>(memo(SnackbarCloseButton), testContent)
