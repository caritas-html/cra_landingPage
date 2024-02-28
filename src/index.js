import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App';
import { ThemeProvider } from 'styled-components';
import { Global } from './styles/global-styles';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={{ theme }}>
      <Home />
      <Global />
    </ThemeProvider>
  </React.StrictMode>,
);
