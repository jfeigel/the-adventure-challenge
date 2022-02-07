import { Theme } from '@mui/material';

declare global {
  interface Window {
    theme: Theme;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    couples: Palette['primary'];
    family: Palette['primary'];
    gold: Palette['primary'];
  }
  interface PaletteOptions {
    couples?: PaletteOptions['primary'];
    family?: PaletteOptions['primary'];
    gold?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    couples: true;
    family: true;
  }
}
