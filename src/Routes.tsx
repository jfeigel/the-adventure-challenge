import React from 'react';

import { Routes as RouterRoutes, Route } from 'react-router-dom';

import Home from 'Home';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
    </RouterRoutes>
  );
}

export default Routes;
