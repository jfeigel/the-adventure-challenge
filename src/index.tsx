import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

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
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
