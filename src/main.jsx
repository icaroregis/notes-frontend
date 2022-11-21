import React from 'react';
import ReactDOM from 'react-dom/client';
//É responsável por prover um tema para a aplicação.
import { ThemeProvider } from 'styled-components';
import theme from './GlobalStyles/themes';
import GlobalStyles from './GlobalStyles/GlobalCss.js';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
