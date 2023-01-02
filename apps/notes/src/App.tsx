import React from 'react';
import { Radio } from 'ui';

import { Footer, Home, Navbar } from './components';

const Modal = React.lazy(() => import('modules/comps').then((mod) => ({ default: mod.Modal })));

const App = () => {
  return (
    <>
      <header>
        <React.Suspense fallback="Loading..">
          <Navbar />
        </React.Suspense>
      </header>

      <main className="">
        <Home />
        <Modal />
        <Radio label="Plans" />
      </main>

      <Footer />
    </>
  );
};

export default App;
