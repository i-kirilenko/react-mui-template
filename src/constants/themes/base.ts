import { ThemeOptions } from '@mui/material'

interface Neutral {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Neutral
  }

  interface PaletteOptions {
    neutral: Neutral
  }
}

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      lg: 1200,
      md: 1000,
      sm: 600,
      xl: 1920,
      xs: 0,
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.375,
    },
  },
}
