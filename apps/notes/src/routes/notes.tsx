import { Layout } from 'components';
import React from 'react';

const AllNotes = React.lazy(() => import('modules/comps').then((mod) => ({ default: mod.Notes })));

const Notes = () => {
  return (
    <Layout>
      <AllNotes />
    </Layout>
  );
};
export default Notes;
