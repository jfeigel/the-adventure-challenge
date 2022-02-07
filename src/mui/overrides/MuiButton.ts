import { ComponentsOverrides, Theme, alpha } from '@mui/material';

const styleOverrides: ComponentsOverrides<Theme>['MuiButton'] = {
  text: ({ ownerState, theme }) => ({
    color: 'inherit',
    '&:hover': {
      ...(ownerState.color === 'couples' && {
        color: theme.palette.couples.dark,
        backgroundColor: alpha(theme.palette.couples.dark, 0.08)
      }),
      ...(ownerState.color === 'family' && {
        color: theme.palette.family.dark,
        backgroundColor: alpha(theme.palette.family.dark, 0.08)
      })
    }
  })
};

export default styleOverrides;
