import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from '@components/ThemeContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          {
            'Margarita Humanitarian Foundation - Help a Family in Need By Donating'
          }
        </title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Our goal at Margarita Humanitarian Foundation is to serve the Uninsured and Under-insured working to establish partnerships with schools, nonprofits, the government, and local community leaders in the Antelope Valley."
        />
        <link href="/images/favicon.ico" rel="icon" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default MyApp;
