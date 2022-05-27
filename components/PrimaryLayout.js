import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import HeroSectionModified from './HeroSectionModified';
import Navbar from './Navbar';
import { useContextTheme } from './ThemeContext';

export default function PrimaryLayout({ main = false, image, children }) {
  const { backgroundColor, textColor } = useContextTheme();
  return (
    <>
      <div className={`flex flex-col min-h-screen ${backgroundColor}`}>
        <Navbar />
        <main className={`flex-grow ${backgroundColor} text-${textColor}`}>
          <HeroSectionModified image={image} main={main} />
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
