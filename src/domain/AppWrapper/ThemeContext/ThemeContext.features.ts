import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from '@mui/material'
import { Localization } from '@mui/material/locale'

import { baseThemeOptions } from 'constants/themes/base'

export type LocaleName = 'enUS' | 'ruRU'
export type ThemeName = 'light' | 'dark'
type ThemeConfig = {
  localeName: LocaleName
  themeName: ThemeName
}

const themeModules: Record<
  ThemeName,
  () => Promise<{ default: ThemeOptions }>
> = {
  dark: () => import('constants/themes/dark'),
  light: () => import('constants/themes/light'),
}

const localeModules: Record<
  LocaleName,
  () => Promise<{ default: Localization }>
> = {
  enUS: () => import('./locales/enUS'),
  ruRU: () => import('./locales/ruRU'),
}

export type LocaleFolder = Partial<Record<LocaleName, Localization>>

export const createTheme = async (config: ThemeConfig): Promise<Theme> => {
  const { default: colorThemeOptions = null } =
    (await themeModules[config.themeName]?.()) || {}

  const { default: localization } =
    (await localeModules[config.localeName]?.()) || {}

  const localeFolder: LocaleFolder = localization
    ? { [config.localeName]: localization }
    : {}

  const themeOptions = [{ ...baseThemeOptions, ...localeFolder }]
  colorThemeOptions && themeOptions.push(colorThemeOptions)

  return responsiveFontSizes(createMuiTheme(...themeOptions))
}
