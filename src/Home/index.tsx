import React from 'react';

import { Box } from '@mui/material';

import logo from 'images/logo.png';

function Home() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flex="1">
      <img src={logo} alt="Adventure Challenge logo" />
    </Box>
  );
}

export default Home;
