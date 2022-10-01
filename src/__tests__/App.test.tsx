import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import React from 'react';

import App from '../App';
import theme from '../theme';

function AllTheProviders({ children }: { children: React.ReactElement }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

describe('<App />', () => {
  describe('counter', () => {
    it('should initialise current count as 0', () => {
      const { getByRole } = render(<App />, { wrapper: AllTheProviders });
      expect(getByRole('button')).toHaveTextContent('0');
    });
  });
});
