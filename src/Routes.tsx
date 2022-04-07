import React from 'react';

import { Navigate, Routes as RouterRoutes, Route } from 'react-router-dom';

import Home from 'Home';
import Profile from 'Profile';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </RouterRoutes>
  );
}

export default Routes;
