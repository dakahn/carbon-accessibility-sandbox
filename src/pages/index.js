import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import 'carbon-components/css/carbon-components.css';

export default () => (
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
    <nav>
      <Ul>
        <li>
          <Link to="/johnny">Jackie is a punk</Link>
        </li>
        <li>
          <Link to="/joey">Judy is a runt</Link>
        </li>
        <li>
          <Link to="/tommy">They both went down to Berlin</Link>
        </li>
        <li>
          <Link to="/deedee">Joined the Ice Capades</Link>
        </li>
        <li>
          <Link to="/marky">and oh, I don't know why</Link>
        </li>
        <li>
          <Link to="/richie">Oh, I don't know why</Link>
        </li>
      </Ul>
    </nav>
  </Main>
);

const Main = styled.main`
  margin-top: 4rem;
  margin-left: 2rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 4rem;
`;

const Ul = styled.ul`
  li {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  a:focus {
    outline: 2px solid #5aaafa;
  }
`;
