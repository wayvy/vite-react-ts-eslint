import * as React from 'react';

import Playground from '@components/Playground';

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <Playground />
      <button onClick={() => setCount((prev) => prev + 1)}>
        count is:
        {count}
      </button>
    </div>
  );
};

export default App;
