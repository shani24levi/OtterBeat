import { PaletteMode } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';

const primaryPalette = {
  main: '#09D3AD',
  light: '#3ADBBD',
  dark: '#212529',
  contrastText: '#FFFFFF',
  //chacked: '#262037'
};

const secondaryPalette = {
  main: '#F50057',
  light: '#F73378',
  dark: '#AB003C',
  contrastText: '#FFFFFF',
};

const errorPalette = {
  main: '#F44336',
  light: '#E57373',
  dark: '#D32F2F',
  contrastText: '#FFFFFF',
};

const warningPalette = {
  main: '#FF9800',
  light: '#FFB74D',
  dark: '#F57C00',
  contrastText: '#000000',
};

const infoPalette = {
  main: '#2196f3',
  light: '#64b5f6',
  dark: '#1976d2',
  contrastText: '#FFFFFF',
};

const successPalette = {
  main: '#4caf50',
  light: '#81c784',
  dark: '#388e3c',
  contrastText: '#000000',
};

const overrides = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        boxShadow: 'none',
        color: '#9C27B0 !important',
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: 'none',
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      track: {
        backgroundColor: '#faebd7',
      },
    },
  },
  // MuiButtonBase: {
  //   styleOverrides: {
  //     root: {
  //       color: '#faebd7',
  //     },
  //   },
  // },
};

const typography = {
  h6: {
    fontWeight: 700,
    flexGrow: 1,
  },
  h5: {
    fontWeight: 700,
    flexGrow: 1,
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#FFFFFF',
      paper: '#EBEDF0',
    },
    text: {
      primary: '#1C1E21',
      secondary: '#606770',
      disabled: '#6A737D',
    },
    primary: primaryPalette,
    secondary: secondaryPalette,
    error: errorPalette,
    warning: warningPalette,
    info: infoPalette,
    success: successPalette,
  },
  components: overrides,
  typography: typography,
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#18191A',
      paper: '#242526',
    },
    text: {
      primary: '#F5F6F7',
      secondary: '#DADDE1',
      disabled: '#6A737D',
    },
    primary: primaryPalette,
    secondary: secondaryPalette,
    error: errorPalette,
    warning: warningPalette,
    info: infoPalette,
    success: successPalette,
  },
  components: overrides,
  typography: typography,
};

export const getThemeOptions = (mode: PaletteMode): ThemeOptions => {
  if (mode === 'dark') return darkThemeOptions;
  return lightThemeOptions;
};

export const getStoredTheme = (): PaletteMode | null => {
  return localStorage.getItem('user-theme') as PaletteMode | null;
};

export const setStoredTheme = (mode: PaletteMode): void => {
  localStorage.setItem('user-theme', mode);
};
