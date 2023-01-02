import { Home, Layout } from 'components';
import React from 'react';
import { Radio } from 'ui';

const Modal = React.lazy(() => import('modules/comps').then((mod) => ({ default: mod.Modal })));

const Root = () => {
  return (
    <Layout>
      <main>
        <Home />
        <Modal />
        <Radio label="Plans" />
      </main>
    </Layout>
  );
};

export default Root;
