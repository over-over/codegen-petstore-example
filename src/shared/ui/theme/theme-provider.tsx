import { ReactNode } from 'react';
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider as MaterialThemeProvider,
} from '@mui/material';

import { lightTheme } from './light-theme';

type Props = { children: ReactNode };

export const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <MaterialThemeProvider theme={lightTheme}>
        <CssBaseline />
        {children}
      </MaterialThemeProvider>
    </StyledEngineProvider>
  );
};
