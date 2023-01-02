import React, { Suspense } from 'react';

const Navbar = React.lazy(() => import('notes/Navbar'));
const Footer = React.lazy(() => import('notes/Footer'));

const App = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <Navbar />
      </Suspense>
      <Suspense fallback="Loading...">
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
