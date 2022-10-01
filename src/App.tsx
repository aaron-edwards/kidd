import { useTheme } from '@emotion/react';
import Header from './components/Header';

function App() {
  const t = useTheme();
  return (
    <>
      <Header />
      <div css={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
      }}
      >
        <p css={{
          color: t.color.primary.main,
          borderBottomColor: t.color.primary.main,
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
        }}
        >Primary
        </p>
        <p css={{
          color: t.color.secondary.main,
          borderBottomColor: t.color.secondary.main,
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
        }}
        >Secondary
        </p>
        <p css={{
          color: t.color.success.main,
          borderBottomColor: t.color.success.main,
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
        }}
        >Success
        </p>
        <p css={{
          color: t.color.error.main,
          borderBottomColor: t.color.error.main,
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
        }}
        >Error
        </p>
      </div>
    </>
  );
}

export default App;
