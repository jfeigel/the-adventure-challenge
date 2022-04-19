import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import ThemeProvider from 'mui/components/ThemeProvider';

import App from 'App';
import AuthProvider from 'Auth/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter
        basename={
          process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''
        }
      >
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
          redirectUri={`${window.location.origin}${process.env.REACT_APP_BASE_URI}`}
          audience={process.env.REACT_APP_AUTH0_AUDIENCE}
          scope="read:current_user"
        >
          <AuthProvider>
            <App />
          </AuthProvider>
        </Auth0Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
