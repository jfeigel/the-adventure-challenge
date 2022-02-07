import { PaletteOptions } from '@mui/material/styles';
import createPalette from '@mui/material/styles/createPalette';

const basePaletteOptions: PaletteOptions = {};
const { augmentColor } = createPalette(basePaletteOptions);

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

const palette = createPalette(paletteOptions);

export default palette;
