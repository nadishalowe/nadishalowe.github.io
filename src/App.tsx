import React from 'react';
import { ThemeProvider } from 'styled-components';

import { HomePage } from './pages';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>
);
