import React, { useEffect, useMemo, useState } from 'react';

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

import UserAvatar from 'common/UserAvatar';

function Profile() {
  /**
   * Hook
   */
  const { getAccessTokenSilently, logout, user } = useAuth0();

  /**
   * State
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  /**
   * Effect
   */
  useEffect(metaEffect, [getAccessTokenSilently, user?.sub]);

  /**
   * Memo
   */
  const identity = useMemo(identityMemo, [userData]);

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
        {loading ? (
          <Skeleton variant="circular" width={100} height={100} />
        ) : (
          <UserAvatar
            user={user}
            sx={{ my: 2, width: 100, height: 100, boxShadow: 2 }}
          />
        )}
        <Typography variant="h4">
          {loading ? (
            <Skeleton variant="rectangular" width={200} sx={{ my: 1 }} />
          ) : (
            user?.name
          )}
        </Typography>
        <Typography variant="body2">
          {loading ? (
            <Skeleton variant="rectangular" width={100} sx={{ my: 1 }} />
          ) : (
            user?.email
          )}
        </Typography>
        {!loading && identity ? (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
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
          sx={{ mt: 5 }}
          disabled={loading}
        >
          Sign Out
        </Button>
      </Paper>
    </Container>
  );

  /**
   * Effect defs
   */
  function metaEffect() {
    (async () => {
      if (!user?.sub) return false;

      const domain = 'jfeigel.auth0.com';
      setLoading(true);

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user'
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

        const res = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const data = await res.json();

        setUserData(data);
      } catch (e) {
        console.error((e as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }

  /**
   * Memo defs
   */
  function identityMemo() {
    if (
      !userData?.identities ||
      find(userData.identities, ['isSocial', false])
    ) {
      return undefined;
    } else {
      if (
        find(userData.identities, (id) =>
          id.provider.toLowerCase().includes('google')
        )
      ) {
        return {
          url: 'https://cdn.auth0.com/marketplace/catalog/content/assets/creators/google/google-avatar.png',
          provider: 'Google'
        };
      } else if (
        find(userData.identities, (id) =>
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
