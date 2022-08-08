import { createTheme } from '@mui/material';

// Используем основную тему для получения значений в lightTheme
const defaultTheme = createTheme();

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1280,
      lg: 1440,
      xl: 1800,
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 16,
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#6200EE',
      light: '#ECE0FD',
      dark: '#0400BA',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C8E6C9',
      light: '#FBFFFC',
      dark: '#97B498',
    },
    error: { main: '#F04D6A', light: '#FFF6F6', dark: '#B80440' },
    warning: { main: '#D78F04', light: '#FFFFDA', dark: '#A06200' },
    success: { main: '#14C04E', light: '#EDF5ED', dark: '#008E1F' },
    text: {
      primary: 'rgba(0,0,0,1)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.3)',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    divider: 'rgba(0,0,0,0.15)',
  },
  typography: {
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '64px',
      lineHeight: '80px',
      color: defaultTheme.palette.text.primary,
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '56px',
      lineHeight: '72px',
      color: defaultTheme.palette.text.primary,
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '48px',
      lineHeight: '64px',
      color: defaultTheme.palette.text.primary,
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '34px',
      lineHeight: '48px',
      letterSpacing: '0.25px',
      color: defaultTheme.palette.text.primary,
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '36px',
      color: defaultTheme.palette.text.primary,
    },
    h6: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '0.15px',
      color: defaultTheme.palette.text.primary,
    },
    subtitle1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0.15px',
      color: defaultTheme.palette.text.primary,
    },
    subtitle2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.1px',
      color: defaultTheme.palette.text.primary,
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.444px',
      color: defaultTheme.palette.text.primary,
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '29px',
      letterSpacing: '0.25px',
      color: defaultTheme.palette.text.primary,
    },
    button: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '1.5px',
      color: defaultTheme.palette.text.primary,
      textTransform: 'capitalize',
    },
    caption: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.5px',
      color: defaultTheme.palette.text.primary,
    },
    overline: {
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '16px',
      letterSpacing: '1.5px',
      color: defaultTheme.palette.text.primary,
      textTransform: 'capitalize',
    },
  },
});
