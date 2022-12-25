import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    Nadidilowe website
  </ThemeProvider>
);
