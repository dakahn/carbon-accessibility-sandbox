import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Back = props => (
  <Div>
    <StyledBack to={props.to}>{props.children}</StyledBack>
  </Div>
);

const Div = styled.div`
  margin-bottom: 1rem;
`;

const StyledBack = styled(Link)`
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

export default Back;
