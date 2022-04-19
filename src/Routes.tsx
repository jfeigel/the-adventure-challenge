import React from 'react';

import { Navigate, Routes as RouterRoutes, Route } from 'react-router-dom';

import Adventures from 'Adventures';
import Home from 'Home';
import Profile from 'Profile';
import ProtectedRoute from 'Auth/ProtectedRoute';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
      <Route
        path="/adventures/:edition"
        element={<ProtectedRoute component={Adventures} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
}

export default Routes;
