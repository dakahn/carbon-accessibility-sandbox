import React from 'react';
import 'carbon-components/css/carbon-components.css';
import styled from 'styled-components';

export default ({ children }) => (
  <React.Fragment>
    <header>
      <H1>
        Carbon <strong>Accessibility</strong> Sandbox{' '}
      </H1>
    </header>
    <Main>{children}</Main>
  </React.Fragment>
);

const Main = styled.main`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 6rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin-left: 2rem;
  margin-bottom: 4rem;
  margin-top: 2rem;
`;
