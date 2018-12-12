import React from 'react';
import styled from 'styled-components';

export default () => (
  <Main>
    <H1>
      Carbon Accessibility Sandbox{' '}
      <span
        role="img"
        aria-label="A blue sign with a white graphic of a person sitting in a wheelchair"
      >
        ♿
      </span>
    </H1>
    <nav>
      <Ul>
        <li>
          <a href="/johnny">Jackie is a punk</a>
        </li>
        <li>
          <a href="/joey">Judy is a runt</a>
        </li>
        <li>
          <a href="/tommy">They both went down to Berlin</a>
        </li>
        <li>
          <a href="/deedee">Joined the Ice Capades</a>
        </li>
        <li>
          <a href="/marky">and oh, I don't know why</a>
        </li>
        <li>
          <a href="/richie">Oh, I don't know why</a>
        </li>
      </Ul>
    </nav>
  </Main>
);

const Main = styled.main`
  font-family: sans-serif;
  margin-left: 2rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Ul = styled.ul`
  font-size: 1.5rem;
  li {
    margin-bottom: 1rem;
  }
  a:focus {
    outline: 3px solid blue;
  }
`;
