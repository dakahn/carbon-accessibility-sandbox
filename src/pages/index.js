import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Navigation from '../components/navigation';

export default () => (
  <Layout>
    <Main>
      <H1>
        Carbon Accessibility Sandbox{' '}
        <span
          role="img"
          aria-label="A blue sign with a white graphic of a person sitting in a wheelchair moving quickly"
        >
          ♿
        </span>
      </H1>
      <Navigation />
    </Main>
  </Layout>
);

const H1 = styled.h1`
  font-size: 3rem;
`;

const Main = styled.main`
  margin-top: 2rem;
  margin-left: 2rem;
`;
