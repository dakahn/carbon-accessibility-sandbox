import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

// TODO: Generalize this component so it can be used as the back on each component page as well
const Back = () => <StyledBack to="/">Back to Topics</StyledBack>;

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
