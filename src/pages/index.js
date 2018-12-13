import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';

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
      <nav aria-labelledby="component-label">
        <H2 id="component-label">Components</H2>
        <Ul>
          <li>
            <Link to="/accordion">Accordion</Link>
          </li>
          <li>
            <Link to="/breadcrumb">Breadcrumb</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/checkbox">Checkbox</Link>
          </li>
          <li>
            <Link to="/code-snippet">Code Snippet</Link>
          </li>
          <li>
            <Link to="/content-switcher">Content Switcher</Link>
          </li>
          <li>
            <Link to="/data-table">Data Table</Link>
          </li>
          <li>
            <Link to="/date-picker">Date Picker</Link>
          </li>
          <li>
            <Link to="/dropdown">Dropdown</Link>
          </li>
          <li>
            <Link to="/file-uploader">File Uploader</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/inline-loading">Inline Loading</Link>
          </li>
          <li>
            <Link to="/link">Link</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/loading">Loading</Link>
          </li>
          <li>
            <Link to="/loading">Loading</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
          <li>
            <Link to="/notification">Notification</Link>
          </li>
          <li>
            <Link to="/number-input">Number Input</Link>
          </li>
          <li>
            <Link to="/overflow-menu">Overflow Menu</Link>
          </li>
          <li>
            <Link to="/pagination">Pagination</Link>
          </li>
          <li>
            <Link to="/progress-indicator">Progress Indicator</Link>
          </li>
          <li>
            <Link to="/radio-button">Radio Button</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/select">Select</Link>
          </li>
          <li>
            <Link to="/slider">Slider</Link>
          </li>
          <li>
            <Link to="/structured-list">Structured List</Link>
          </li>
          <li>
            <Link to="/tabs">Tabs</Link>
          </li>
          <li>
            <Link to="/tag">Tag</Link>
          </li>
          <li>
            <Link to="/text-input">Text Input</Link>
          </li>
          <li>
            <Link to="/tile">Tile</Link>
          </li>
          <li>
            <Link to="/toggle">Toggle</Link>
          </li>
          <li>
            <Link to="/tooltip">Tooltip</Link>
          </li>
        </Ul>
      </nav>
    </Main>
  </Layout>
);

const Main = styled.main`
  margin-top: 2rem;
  margin-left: 2rem;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 4rem;
`;

const H2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Ul = styled.ul`
  margin-left: 1.5rem;
  width: 200px;

  li {
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  }

  a:focus {
    outline: 0;
    color: black;
    background-color: #41d6c3;
  }
`;
