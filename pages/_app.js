import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default MyApp;
