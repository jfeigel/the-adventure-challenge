import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import ThemeProvider from 'mui/components/ThemeProvider';

import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter
        basename={
          process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''
        }
      >
        <Auth0Provider
          domain="jfeigel.auth0.com"
          clientId="bs9cX5hIrsq1LMc85bKFvmBkgcC143In"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
