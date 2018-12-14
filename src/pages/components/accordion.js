import React from 'react';
import Accordion from 'carbon-components-react/lib/components/Accordion';
import AccordionItem from 'carbon-components-react/lib/components/AccordionItem';
import Layout from '../../components/layout';
import Back from '../../components/back';

export default props => (
  <Layout>
    <Back to="/components">Back to components</Back>
    <Accordion title="Hi">
      <AccordionItem />
    </Accordion>
    <Accordion>
      <AccordionItem>Hi how are you</AccordionItem>
    </Accordion>
    <Accordion>
      <AccordionItem>Hi how are you</AccordionItem>
    </Accordion>
  </Layout>
);
