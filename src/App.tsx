import React from 'react';

import { Box } from '@mui/material';

import Routes from 'Routes';

function App() {
  return (
    <Box id="main" display="flex" flexDirection="column" flex="1 0 auto">
      <Box position="relative" display="flex" flexDirection="column" flex="1">
        <Box
          display="flex"
          flexDirection="column"
          flex="1"
          alignItems="stretch"
        >
          <Box
            id="content"
            display="flex"
            flexDirection="column"
            flex="1"
            minHeight="100%"
            overflow="hidden"
            m={2.5}
          >
            <Routes />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
