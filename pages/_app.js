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
          content="Our goal at Margarita Humanitarian Foundation is to serve the Uninsured and Under-insured. Originally founded in 2019 as a humanitarian medical clinic. In July 2021, under new management the focus shifted to identifying and addressing the most critical community needs in Antelope Valley, as a humanitarian organization. Under this new mission, we're working to establish partnerships with schools, nonprofits, the government, and local community leaders. Our goal is to help the individuals and communities who need help most. We're particularly interested in setting up new programs to make a difference in at-risk youth lives."
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
