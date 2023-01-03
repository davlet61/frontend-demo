import React, { Suspense } from 'react';

const Navbar = React.lazy(() => import('notes/Navbar'));
const Footer = React.lazy(() => import('notes/Footer'));

const App = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <Navbar />
        <main className='flex p-8 text-8xl animate-pulse text-center text-brand-900 font-bold h-full items-center justify-center'>
          Federated React App
        </main>
      </Suspense>
      <Suspense fallback="Loading...">
        <Footer />
      </Suspense>
    </>
  );
};

export default App;
