import * as React from 'react';

import ViteIcon from '@img/vite-logo.svg?component';
import viteImg from '@img/vite-logo.svg';

const Playground: React.FC = () => {
  return (
    <div>
      <h1>Playground</h1>
      <ViteIcon />
      <div
        style={{
          background: `url(${viteImg}) no-repeat center / contain`,
          width: '410px',
          height: '404px',
        }}
      />
    </div>
  );
};

export default Playground;
