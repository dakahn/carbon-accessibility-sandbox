import React from 'react';
import Layout from '../../components/layout';
import Back from '../../components/back';
import ContentSwitcher from 'carbon-components-react/lib/components/ContentSwitcher';
import Switch from 'carbon-components-react/lib/components/Switch';

export default props => (
  <Layout>
    <Back to="/components">return to components</Back>
    <ContentSwitcher>
      <Switch name="one" text="First section" />
      <Switch name="two" text="Second section" />
      <Switch name="three" text="Third section" />
      <Switch name="four" text="Fourth section" />
      <Switch name="five" text="Fifth section" />
    </ContentSwitcher>
  </Layout>
);
