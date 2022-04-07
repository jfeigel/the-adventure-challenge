import { PaletteOptions, createTheme } from '@mui/material';

import theme from './baseTheme';

const {
  palette: { augmentColor }
} = theme;

const paletteOptions: PaletteOptions = {
  couples: augmentColor({
    color: {
      main: '#f2f2f2'
    }
  }),
  family: augmentColor({
    color: {
      main: '#76cfda'
    }
  }),
  gold: augmentColor({
    color: {
      main: '#edd8ba'
    }
  })
};

const { palette } = createTheme({ palette: paletteOptions });

export default palette;
