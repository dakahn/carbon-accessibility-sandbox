import React from 'react';
import Checkbox from 'carbon-components-react/lib/components/Checkbox';
import Layout from '../../components/layout';
import Back from '../../components/back';

export default props => (
  <Layout>
    <Back to="/components">Return to components</Back>
    <fieldset>
      <legend className="bx--label">Checkbox Heading</legend>
      <Checkbox defaultChecked id="checkbox-label-1" />
      <Checkbox id="checkbox-label-2" />
    </fieldset>
  </Layout>
);
