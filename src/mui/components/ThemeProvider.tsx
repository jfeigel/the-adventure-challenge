import React from 'react';

import {
  CssBaseline,
  Theme,
  ThemeProvider as MuiThemeProvider,
  createTheme
} from '@mui/material';

import styleOverrides from '../overrides';

declare global {
  interface Window {
    theme: Theme;
  }
}

interface Props {
  children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: styleOverrides.MuiCssBaseline
      }
    }
  });

  window.theme = theme;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
