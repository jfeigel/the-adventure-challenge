import React from 'react';

import { Box } from '@mui/material';

import Routes from 'Routes';

function App() {
  return (
    <Box
      id="main"
      position="relative"
      display="flex"
      flexDirection="column"
      flex="1 0 auto"
    >
      <Routes />
    </Box>
  );
}

export default App;
