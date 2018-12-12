import React from 'react';
import styled from 'styled-components';

export default () => (
  <>
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
          <a href="/johnny">Johnny</a>
        </li>
        <li>
          <a href="/joey">Joey</a>
        </li>
        <li>
          <a href="/tommy">Tommy</a>
        </li>
        <li>
          <a href="/deedee">DeeDee</a>
        </li>
        <li>
          <a href="/marky">Marky</a>
        </li>
        <li>
          <a href="/richie">Richie</a>
        </li>
      </Ul>
    </nav>
  </>
);

const H1 = styled.h1`
  font-size: 4rem;
`;

const Ul = styled.ul`
  font-size: 2rem;
`;
