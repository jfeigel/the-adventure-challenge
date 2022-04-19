import React, { useContext, useMemo } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Skeleton,
  Typography
} from '@mui/material';
import { find } from 'lodash-es';

import { AuthContext } from 'Auth/AuthProvider';
import UserAvatar from 'common/UserAvatar';

function Profile() {
  /**
   * Hook
   */
  const { logout } = useAuth0();

  /**
   * Context
   */
  const { loading, user } = useContext(AuthContext);

  /**
   * Memo
   */
  const identity = useMemo(identityMemo, [user]);

  return (
    <Container maxWidth="sm">
      <Paper
        sx={{
          mt: 20,
          px: 3,
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {loading ? (
          <Skeleton variant="circular" width={100} height={100} />
        ) : (
          <UserAvatar
            user={user}
            sx={{ mb: 3, width: 100, height: 100, boxShadow: 2 }}
          />
        )}
        <Typography variant="h4">
          {loading ? (
            <Skeleton variant="rectangular" width={200} sx={{ my: 1 }} />
          ) : (
            user?.name
          )}
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          {loading ? (
            <Skeleton variant="rectangular" width={100} sx={{ my: 0.5 }} />
          ) : (
            user?.email
          )}
        </Typography>
        {!loading && identity ? (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <Typography fontWeight="medium" sx={{ mr: 1 }}>
              Connection
            </Typography>
            <Avatar
              src={identity.url}
              alt={identity.provider}
              sx={{ width: 24, height: 24 }}
            />
          </Box>
        ) : null}
        <Button
          variant="contained"
          onClick={() => logout()}
          sx={{ mt: 6 }}
          disabled={loading}
        >
          Sign Out
        </Button>
      </Paper>
    </Container>
  );

  /**
   * Memo defs
   */
  function identityMemo() {
    if (!user?.identities || find(user.identities, ['isSocial', false])) {
      return undefined;
    } else {
      if (
        find(user.identities, (id) =>
          id.provider.toLowerCase().includes('google')
        )
      ) {
        return {
          url: 'https://cdn.auth0.com/marketplace/catalog/content/assets/creators/google/google-avatar.png',
          provider: 'Google'
        };
      } else if (
        find(user.identities, (id) =>
          id.provider.toLowerCase().includes('github')
        )
      ) {
        return {
          url: 'https://cdn.auth0.com/marketplace/catalog/content/assets/creators/github/github-avatar.png',
          provider: 'GitHub'
        };
      }
    }
  }
}

export default Profile;
