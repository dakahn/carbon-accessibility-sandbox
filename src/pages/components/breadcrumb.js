import React from 'react';
import Breadcrumb from 'carbon-components-react/lib/components/Breadcrumb';
import BreadcrumbItem from 'carbon-components-react/lib/components/BreadcrumbItem';
import Layout from '../../components/layout';
import Back from '../../components/back';

export default props => (
  <Layout>
    <Back to="/components">Return to components</Back>
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
  </Layout>
);
