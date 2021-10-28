import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import { useContextTheme } from './ThemeContext';

export default function PrimaryLayout({
  main = false,
  image,
  inNeed = false,
  children,
}) {
  const { backgroundColor, textColor } = useContextTheme();
  return (
    <>
      <Head>
        <title>{'Help a Family in Need'}</title>
        <link href="/images/favicon.ico" rel="icon" />
      </Head>
      <div className={`flex flex-col min-h-screen ${backgroundColor}`}>
        <Navbar />
        <main className={`flex-grow ${backgroundColor} text-${textColor}`}>
          <HeroSection image={image} inNeed={inNeed} main={main} />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

PrimaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
