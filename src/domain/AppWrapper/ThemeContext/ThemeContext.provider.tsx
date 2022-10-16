import { FC, memo, PropsWithChildren, useEffect, useState } from 'react'
import { Theme } from '@mui/material'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import { ThemeName } from 'constants/themes/base'
import log from 'utils/log'
import { createTheme, LocaleName } from './ThemeContext.features'

type ThemeProviderProps = {
  localeName: LocaleName
  themeName: ThemeName
}

const ThemeContextProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  localeName,
  themeName,
}) => {
  const [theme, setTheme] = useState<Theme | null>(null)

  log(`ThemeContextProvider${theme ? '' : '.initial'}.${themeName}.render`)(
    // @ts-ignore
    `now is ${theme?.palette?.themeName}`,
  )

  useEffect(() => {
    ;(async () => {
      const newTheme = await createTheme({ localeName, themeName })
      setTheme(newTheme)
    })()
  }, [localeName, themeName])

  return theme ? (
    <MuiThemeProvider {...{ theme }}>{children}</MuiThemeProvider>
  ) : null
}

export default memo(ThemeContextProvider)
