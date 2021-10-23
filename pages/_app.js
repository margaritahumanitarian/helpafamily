import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from '@components/ThemeContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
