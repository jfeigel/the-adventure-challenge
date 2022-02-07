import React from 'react';

import { Box, Container } from '@mui/material';

import logo from 'images/logo.png';

function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1'
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Adventure Challenge logo"
        sx={{ maxWidth: '80%' }}
      />
    </Container>
  );
}

export default Home;
