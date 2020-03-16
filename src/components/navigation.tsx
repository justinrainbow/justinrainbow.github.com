import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { AppBar, Toolbar } from '@material-ui/core';

export default () => (
  <AppBar position="sticky">
    <Toolbar>
      <nav role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </nav>
    </Toolbar>
  </AppBar>
);
