import { render } from '@testing-library/react';

import { act } from 'react-dom/test-utils';
import App from '../App';

describe('<App />', () => {
  describe('counter', () => {
    it('should initialise current count as 0', () => {
      const { getByRole } = render(<App />);
      expect(getByRole('button')).toHaveTextContent('0');
    });

    it('should increment when clicked', () => {
      const { getByRole } = render(<App />);
      act(() => getByRole('button').click());
      expect(getByRole('button')).toHaveTextContent('1');
    });
  });
});
