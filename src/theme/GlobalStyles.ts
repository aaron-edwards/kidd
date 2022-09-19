import { Styled } from '../types/types';

const GlobalStyles: Styled = (t) => ({
  body: {
    fontFamily: 'Space Grotesk',
    background: t.color.primary.bg3,
    color: t.color.primary.main,
    margin: '0px',
  },
});

export default GlobalStyles;
