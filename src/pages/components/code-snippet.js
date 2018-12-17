import React from 'react';
import Layout from '../../components/layout';
import Back from '../../components/back';
import CodeSnippet from 'carbon-components-react/lib/components/CodeSnippet/CodeSnippet';

export default props => (
  <Layout>
    <Back to="/components">return to components</Back>
    <h2>Inline</h2>
    <p>
      First do this{' '}
      <CodeSnippet type="inline">{`SELECT * FROM table;`}</CodeSnippet>
    </p>
    <h2>Single line</h2>
    <p>
      <CodeSnippet type="single">{`SELECT age, name FROM people;`}</CodeSnippet>
    </p>
    <h2>Multi-line</h2>
    <p>
      <CodeSnippet type="multi">
        {`UPDATE people SET name = 'Johnny', age = 101 WHERE 
        (name = 'Joey' AND age = 100) OR 
        name = 'DeeDee';`}
      </CodeSnippet>
    </p>
  </Layout>
);
