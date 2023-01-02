import React from 'react';

import { Footer, Navbar } from '.';

const Modal = React.lazy(() => import('modules/comps').then((mod) => ({ default: mod.Modal })));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Navbar />
    {children}
    <Modal />
    <Footer />
  </>
);

export default Layout;
