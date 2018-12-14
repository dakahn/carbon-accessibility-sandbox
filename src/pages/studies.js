import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Back from '../components/back';

export default () => (
  <Layout>
    <Back />
    <nav>
      <H2 id="section-heading">Current Studies</H2>
      <Ul aria-labelledby="section-heading">
        <li>There are no case studies being conducted at this time.</li>
      </Ul>
    </nav>
  </Layout>
);

const H2 = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Ul = styled.ul`
  margin-left: 0.5rem;
  li {
    font-size: 1.25rem;
    padding: 0.5rem;
  }

  a:focus {
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
