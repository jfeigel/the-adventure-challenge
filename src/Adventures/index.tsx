import React, { useContext } from 'react';

import { Container } from '@mui/material';
import { capitalize } from 'lodash-es';
import { Navigate, useParams } from 'react-router-dom';

import { AuthContext, Editions } from 'Auth/AuthProvider';

function Adventures() {
  /**
   * Hooks
   */
  const { edition } = useParams();

  /**
   * Context
   */
  const { loading, user } = useContext(AuthContext);

  return !loading &&
    edition &&
    !user?.editions?.includes(
      Editions[edition.toUpperCase() as keyof typeof Editions]
    ) ? (
    <Navigate to="/" replace />
  ) : (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1',
        py: 5
      }}
    >
      {`${capitalize(edition ?? '')} Edition`}
    </Container>
  );
}

export default Adventures;
