import React, { PropsWithChildren } from 'react';
import { RouterProvider } from 'react-router';

import { router } from './router/Router';

const App: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
