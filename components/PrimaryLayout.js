import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import HeroSection from './HeroSection';
import Navbar from './Navbar';
import { useContextTheme } from './ThemeContext';

export default function PrimaryLayout({
  main = false,
  inNeed = false,
  children,
  description,
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
          <HeroSection inNeed={inNeed} main={main} />
          <div className="text-center hero-content md:m-auto">
            <div className="w-lg">
              <h2 className="pb-20 text-3xl md:text-4xl">{description}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-8 gap-y-5 justify-center align-center content-center">
                {children}
              </div>
            </div>
          </div>
          <div className="email-captureBox border-4 text-center hero-content mx-auto my-10">
            <div>
              <div className="email-title text-4xl pt-5">
                <h1 className="mb-12">{'Keep In Touch'}</h1>
              </div>
              <div className="email-content-box pb-10 text-center hero-content md:m-auto">
                <div className="description text-lg">
                  {
                    'Lorem epsum epsum loremLorem epsum epsum lorem-Lorem epsum epsum loremLorem epsum epsum loremLorem epsum epsum lorem'
                  }
                </div>
                <div className="enter-email">
                  <div className="text-lg pb-5">{`Enter your Email`}</div>
                  <input placeholder="Enter Your Email" />
                  <button type="submit">{'>'}</button>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .email-captureBox {
            }
            .email-title {
              margin: auto;
              text-align: center;
            }

            .email-content-box {
              display: flex;
              align-items: start;
            }

            .email-content-box > * {
              flex-basis: 100%;
            }

            @media screen and (max-width: 540px) {
              .email-content-box {
                flex-wrap: wrap;
              }
            }
          `}</style>
        </main>
        <Footer />
      </div>
    </>
  );
}

PrimaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
