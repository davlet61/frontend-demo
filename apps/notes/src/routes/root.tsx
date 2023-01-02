import { Layout, Welcome } from 'components';
import React from 'react';
import { ExampleRadioGroup } from 'ui';

const Root = () => {
  return (
    <Layout>
      <main className="h-full">
        <Welcome />
        <ExampleRadioGroup label="Example Radio Group:" />
      </main>
    </Layout>
  );
};

export default Root;
