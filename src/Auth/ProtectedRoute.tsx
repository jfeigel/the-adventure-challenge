import React, { ComponentType } from 'react';

import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Box, CircularProgress } from '@mui/material';

type Props = { component: ComponentType };

function ProtectedRoute({ component }: Props) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Box display="flex" flex="1" justifyContent="center" alignItems="center">
        <CircularProgress color="primary" />
      </Box>
    )
  });

  return <Component />;
}

export default ProtectedRoute;
