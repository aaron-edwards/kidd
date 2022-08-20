import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((c) => c + 1)}>
      count is {count}
    </button>
  );
}

export default App;
