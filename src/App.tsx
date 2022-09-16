import { Theme } from '@emotion/react';
import { useState } from 'react';

const style = (theme: Theme) => ({ color: theme.color.primary });

function App() {
  const [count, setCount] = useState(0);

  return (
    <button
      css={style}
      type="button"
      onClick={() => setCount((c) => c + 1)}
    >
      count is {count}
    </button>
  );
}

export default App;
