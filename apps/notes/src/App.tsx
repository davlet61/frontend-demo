import React from 'react';
import { Radio } from 'ui';

import { Home, Modal } from './components';

const Navbar = React.lazy(() => import('skeleton/modules').then((mod) => ({ default: mod.Navbar })));

const App = () => {
  return (
    <main className="">
      <React.Suspense fallback="Loading..">
        <Navbar />
      </React.Suspense>
      <Home />
      <Modal />
      <Radio label="Plans" />
    </main>
  );
};

export default App;
