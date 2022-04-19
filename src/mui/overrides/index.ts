import { ComponentsOverrides, Theme } from '@mui/material';

import MuiAvatar from './MuiAvatar';
import MuiButton from './MuiButton';
import MuiCssBaseline from './MuiCssBaseline';

const overrides: ComponentsOverrides<Theme> = {
  MuiAvatar,
  MuiButton,
  MuiCssBaseline
};

export default overrides;
