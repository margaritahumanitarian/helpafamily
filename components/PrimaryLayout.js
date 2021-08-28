import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';

export default function PrimaryLayout({ children }) {
  return (
    <>
      <Head>
        <title>{'Help a Family in Need'}</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <div className="text-center hero-content md:m-auto">
          <div className="w-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-8 gap-y-5 justify-center align-center content-center">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

PrimaryLayout.propTypes = {
  children: PropTypes.node
};