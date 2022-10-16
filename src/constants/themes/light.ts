import { ThemeOptions } from '@mui/material'

const neutral = {
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D1D5DB',
  400: '#9CA3AF',
  500: '#6B7280',
  600: '#4B5563',
  700: '#374151',
  800: '#1F2937',
  900: '#111827',
}

const background = {
  default: '#E1E1E1',
  paper: '#F9FAFC',
}

const divider = '#E6E8F0'

const primary = {
  contrastText: '#FFFFFF',
  dark: '#3832A0',
  light: '#828DF8',
  main: '#5048E5',
}

const secondary = {
  contrastText: '#FFFFFF',
  dark: '#0B815A',
  light: '#3FC79A',
  main: '#10B981',
}

const success = {
  contrastText: '#FFFFFF',
  dark: '#0E8074',
  light: '#43C6B7',
  main: '#14B8A6',
}

const info = {
  contrastText: '#FFFFFF',
  dark: '#0B79D0',
  light: '#64B6F7',
  main: '#2196F3',
}

const warning = {
  contrastText: '#FFFFFF',
  dark: '#B27B16',
  light: '#FFBF4C',
  main: '#FFB020',
}

const error = {
  contrastText: '#FFFFFF',
  dark: '#922E2E',
  light: '#DA6868',
  main: '#D14343',
}

const text = {
  disabled: 'rgba(55, 65, 81, 0.48)',
  primary: '#121828',
  secondary: '#65748B',
}

const lightThemeOptions: ThemeOptions = {
  palette: {
    action: {
      active: neutral[500],
      disabled: 'rgba(55, 65, 81, 0.26)',
      disabledBackground: 'rgba(55, 65, 81, 0.12)',
      focus: 'rgba(55, 65, 81, 0.12)',
      hover: 'rgba(55, 65, 81, 0.04)',
      selected: 'rgba(55, 65, 81, 0.08)',
    },
    background,
    divider,
    error,
    info,
    mode: 'light',
    neutral,
    primary,
    secondary,
    success,
    text,
    themeName: 'light',
    warning,
  },
  shadows: [
    'none',
    '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
    '0px 1px 2px rgba(100, 116, 139, 0.12)',
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
  ],
}

export default lightThemeOptions
