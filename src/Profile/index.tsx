import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button, Container, Paper, Typography } from '@mui/material';

import UserAvatar from 'common/UserAvatar';

function Profile() {
  /**
   * Hooks
   */
  const { logout, user } = useAuth0();

  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          mt: 20,
          px: 3,
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <UserAvatar
          user={user}
          sx={{ my: 2, width: 100, height: 100, boxShadow: 2 }}
        />
        <Typography variant="h4">{user?.name}</Typography>
        <Typography variant="body2">{user?.email}</Typography>
        <Button variant="contained" onClick={() => logout()} sx={{ mt: 5 }}>
          Sign Out
        </Button>
      </Paper>
    </Container>
  );
}

export default Profile;
