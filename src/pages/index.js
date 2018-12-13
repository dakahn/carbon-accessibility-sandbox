import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Navigation from '../components/navigation';

export default () => (
  <Layout>
    <Main>
      <A href="#studies">Skip to current studies</A>
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
  margin-bottom: 2rem;
  margin-top: 2rem;
`;

const Main = styled.main`
  margin-top: 2rem;
  margin-left: 2rem;
`;

const A = styled.a`
  :focus {
    background-color: #41d6c3;
    color: black;
    margin-left: -0.5rem;
    outline: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
  }
`;
