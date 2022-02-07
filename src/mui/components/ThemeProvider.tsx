import React from 'react';

import {
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
  createTheme
} from '@mui/material';

import styleOverrides from 'mui/overrides';
import palette from 'mui/palette';

interface Props {
  children: React.ReactNode;
}

function ThemeProvider({ children }: Props) {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: styleOverrides.MuiButton
      },
      MuiCssBaseline: {
        styleOverrides: styleOverrides.MuiCssBaseline
      }
    },
    palette,
    typography: {
      fontFamily: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      button: {
        textTransform: 'none'
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
