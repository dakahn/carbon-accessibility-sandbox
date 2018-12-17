import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Back from '../components/back';

export default () => (
  <Layout>
    <Back to="/">Back to topics</Back>
    <nav>
      <H2 id="section-heading">Components</H2>
      <Ul aria-labelledby="section-heading">
        <li>
          <Link to="/components/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/components/breadcrumb">Breadcrumb</Link>
        </li>
        <li>
          <Link to="/components/button">Button</Link>
        </li>
        <li>
          <Link to="/components/checkbox">Checkbox</Link>
        </li>
        <li>
          <Link to="/components/code-snippet">Code Snippet</Link>
        </li>
        <li>
          <Link to="/components/content-switcher">Content Switcher</Link>
        </li>
        <li>
          <Link to="/components/data-table">Data Table</Link>
        </li>
        <li>
          <Link to="/components/date-picker">Date Picker</Link>
        </li>
        <li>
          <Link to="/components/dropdown">Dropdown</Link>
        </li>
        <li>
          <Link to="/components/file-uploader">File Uploader</Link>
        </li>
        <li>
          <Link to="/components/form">Form</Link>
        </li>
        <li>
          <Link to="/components/inline-loading">Inline Loading</Link>
        </li>
        <li>
          <Link to="/components/link">Link</Link>
        </li>
        <li>
          <Link to="/components/list">List</Link>
        </li>
        <li>
          <Link to="/components/loading">Loading</Link>
        </li>
        <li>
          <Link to="/components/loading">Loading</Link>
        </li>
        <li>
          <Link to="/components/modal">Modal</Link>
        </li>
        <li>
          <Link to="/components/notification">Notification</Link>
        </li>
        <li>
          <Link to="/components/number-input">Number Input</Link>
        </li>
        <li>
          <Link to="/components/overflow-menu">Overflow Menu</Link>
        </li>
        <li>
          <Link to="/components/pagination">Pagination</Link>
        </li>
        <li>
          <Link to="/components/progress-indicator">Progress Indicator</Link>
        </li>
        <li>
          <Link to="/components/radio-button">Radio Button</Link>
        </li>
        <li>
          <Link to="/components/search">Search</Link>
        </li>
        <li>
          <Link to="/components/select">Select</Link>
        </li>
        <li>
          <Link to="/components/slider">Slider</Link>
        </li>
        <li>
          <Link to="/components/structured-list">Structured List</Link>
        </li>
        <li>
          <Link to="/components/tabs">Tabs</Link>
        </li>
        <li>
          <Link to="/components/tag">Tag</Link>
        </li>
        <li>
          <Link to="/components/text-input">Text Input</Link>
        </li>
        <li>
          <Link to="/components/tile">Tile</Link>
        </li>
        <li>
          <Link to="/components/toggle">Toggle</Link>
        </li>
        <li>
          <Link to="/components/tooltip">Tooltip</Link>
        </li>
      </Ul>
    </nav>
  </Layout>
);

const H2 = styled.h2`
  font-size: 2rem;
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
