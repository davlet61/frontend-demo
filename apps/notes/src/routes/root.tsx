import { Home, Layout } from 'components';
import React from 'react';
import { Radio } from 'ui';

const Root = () => {
  return (
    <Layout>
      <main className="h-full">
        <Home />
        <Radio label="Plans" />
      </main>
    </Layout>
  );
};

export default Root;
