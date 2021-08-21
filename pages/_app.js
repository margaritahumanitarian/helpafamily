import PropTypes from 'prop-types';
import React from 'react';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default MyApp;
