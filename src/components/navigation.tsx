import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { AppBar, Toolbar } from '@material-ui/core';

export default () => (
  <AppBar position="sticky">
    <Toolbar>
      <Link to="/">Home</Link>
    </Toolbar>
  </AppBar>
);
