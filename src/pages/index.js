import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Link } from 'gatsby';

export default () => (
  <Layout>
    <nav aria-labelledby="section-heading">
      <H1 id="section-heading">Topics</H1>
      <Ul>
        <li>
          <Link to="/components">Components</Link>
        </li>
        <li>
          <Link to="/studies">Case Studies</Link>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/IBM/carbon-components/issues/new/choose"
          >
            Create an issue on Github
          </a>
        </li>
      </Ul>
    </nav>
  </Layout>
);

const H1 = styled.h1`
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
