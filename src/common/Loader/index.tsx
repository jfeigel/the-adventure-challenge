import React from 'react';

import {
  Box,
  BoxProps,
  CircularProgress,
  CircularProgressProps,
  SxProps,
  Theme,
  alpha
} from '@mui/material';

type Props = {
  backdrop?: boolean;
  size?: 'parent' | 'page' | 'flex';
  loaderSize?: CircularProgressProps['size'];
  containerProps?: BoxProps;
};

function Loader(props: Props) {
  let sizeProps: SxProps<Theme> = {};

  if (props.size === 'page') {
    sizeProps = {
      position: 'fixed',
      height: '100vh',
      width: '100vw'
    };
  } else if (props.size !== 'flex') {
    sizeProps = {
      position: 'absolute',
      bottom: 0,
      right: 0
    };
  }

  return (
    <Box
      sx={{
        ...sizeProps,
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        bgcolor: (theme) =>
          props.backdrop
            ? alpha(theme.palette.common.white, 0.6)
            : 'transparent'
      }}
      {...props.containerProps}
    >
      <CircularProgress color="primary" size={props.loaderSize} />
    </Box>
  );
}

export default Loader;
