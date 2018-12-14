import React from 'react';
import Button from 'carbon-components-react/lib/components/Button';
import Layout from '../../components/layout';
import Back from '../../components/back';
import styled from 'styled-components';

export default props => (
  <Layout>
    <Back to="/components">Back to components</Back>
    <Div>
      <Button className="some-class">Button</Button>
      <Button href="#" className="some-class">
        Link
      </Button>
    </Div>
  </Layout>
);

const Div = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
