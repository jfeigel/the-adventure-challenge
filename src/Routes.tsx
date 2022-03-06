import React from 'react';

import { Routes as RouterRoutes, Route } from 'react-router-dom';

import Home from 'Home';
import Profile from 'Profile';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </RouterRoutes>
  );
}

export default Routes;
