import React from 'react';
import Layout from '../../components/layout';
import Back from '../../components/back';
import styled from 'styled-components';
import CodeSnippet from 'carbon-components-react/lib/components/CodeSnippet/CodeSnippet';

export default props => (
  <Layout>
    <Back to="/components">return to components</Back>
    <h2>Inline</h2>
    <P>
      First do this{' '}
      <CodeSnippet type="inline">{`SELECT * FROM table;`}</CodeSnippet>
    </P>
    <h2>Single line</h2>
    <P>
      <CodeSnippet type="single">{`SELECT age, name FROM people;`}</CodeSnippet>
    </P>
    <h2>Multi-line</h2>
    <P>
      <CodeSnippet type="multi">
        {`UPDATE people SET name = 'Johnny', age = 101 WHERE 
        (name = 'Joey' AND age = 100) OR 
        name = 'DeeDee';`}
      </CodeSnippet>
    </P>
  </Layout>
);

const P = styled.p`
  margin-bottom: 2rem;
`;
