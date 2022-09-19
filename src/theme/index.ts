import { Theme } from '@emotion/react';
import createPallette from './createPalette';

const theme: Theme = {
  color: {
    primary: createPallette(180),
    secondary: createPallette(60),

    success: createPallette(120),
    error: createPallette(0),
  },
};

export default theme;
