/** @jsxImportSource @emotion/react */

import { useTheme } from '@emotion/react';
import { Styled } from '../types/types';

const HeaderStyles: Styled = (t) => ({
  borderBottomColor: t.color.primary.main,
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  fontFamily: 'Equinox Regular',
  background: t.color.primary.bg2,
});

const SubtitleStyles: Styled = (t) => ({
  margin: 0,
  color: t.color.secondary.main,
});

export default function Header() {
  const theme = useTheme();
  return (
    <header css={HeaderStyles}>
      <div css={{ display: 'flex', alignItems: 'baseline', gap: '1em' }}>
        <h1 css={{ margin: 0 }}>K.I.D.D.</h1>
        <p css={SubtitleStyles(theme)}>Kerbal Interactive Data Displayer</p>
      </div>
    </header>
  );
}
