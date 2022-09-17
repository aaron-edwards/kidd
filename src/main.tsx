import {
  Global, Interpolation, Theme, ThemeProvider,
} from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import createPallette from './theme/createPalette';

const theme: Theme = {
  color: {
    primary: createPallette(180),
    secondary: createPallette(60),
  },
};

const GlobalStyles: Interpolation<Theme> = (t) => ({
  body: {
    background: t.color.primary.bg3,
    color: t.color.primary.main,
    margin: '0px',
  },
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />

    </ThemeProvider>
  </React.StrictMode>,
);
