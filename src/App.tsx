import React from 'react';

import { Box } from '@mui/material';

import Routes from 'Routes';
import Header from 'common/Header';

function App() {
  return (
    <Box
      id="main"
      position="relative"
      display="flex"
      flexDirection="column"
      flex="1 0 auto"
    >
      <Header />
      <Routes />
    </Box>
  );
}

export default App;
