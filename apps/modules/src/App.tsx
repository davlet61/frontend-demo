import React, { Suspense } from 'react';

const Navbar = React.lazy(() => import('notes/Navbar'));

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Navbar />
    </Suspense>
  );
};

export default App;
