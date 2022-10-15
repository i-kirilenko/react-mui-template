import { FC, PropsWithChildren, useMemo } from 'react'
import { SnackbarAction, SnackbarOrigin, SnackbarProvider } from 'notistack'

import log from 'utils/log'
import SnackbarCloseButton from './SnackbarCloseButton'

const SnackbarContextProvider: FC<PropsWithChildren> = ({ children }) => {
  log('SnackbarContextProvider.render')()

  const snackbarProviderProps = useMemo(
    () => ({
      action: ((id) => <SnackbarCloseButton {...{ id }} />) as SnackbarAction,
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom',
      } as SnackbarOrigin,
      dense: true,
      hideIconVariant: true,
      maxSnack: 7,
    }),
    [],
  )

  return (
    <SnackbarProvider {...snackbarProviderProps}>{children}</SnackbarProvider>
  )
}

export default SnackbarContextProvider
