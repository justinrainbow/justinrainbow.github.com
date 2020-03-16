import React from 'react';
import Container from './container';
import Navigation from './navigation';

// declare var __PATH_PREFIX__: string
// declare var __PREFIX_PATHS__: boolean

const Template = ({ location, children }) => {
  // const rootPath =
  //   typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__
  //     ? __PATH_PREFIX__ + `/`
  //     : `/`

  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
};

export default Template;
