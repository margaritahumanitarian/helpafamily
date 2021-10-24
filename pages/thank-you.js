import Image from 'next/image';
import React from 'react';

import Footer from '../components/Footer';

export default function Home() {
  return (
    <html lang="en">
    <html lang="en-US">
    <html lang={language}>
      <head>
        <title>{'Thank You!'}</title>
      </head>
      <body>
        <div className="min-h-screen bg-base-200 flex flex-col justify-evenly">
          <div className="hero">
            <div className="text-center hero-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{'Thank You!'}</h1>
                <p>
                  {'With gratitude from Margarita Humanitarian Foundation.'}
                </p>
                <p>
                  {
                    'Thanks so much for your generosity. We promise to use it to help the causes you indicated your support for, and to be extra thoughtful about putting it to good use.'
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="self-center">
            <Image
              alt="Logo of the Margarita Humanitarian Foundation"
              height="300"
              src="/images/MHF-Color-300x300.png"
              width="300"
            />
          </div>
          <div className="self-center text-center">
            <h3 className="m-0 mt-10 mb-2 text-3xl font-bold">
              {'Reach Out to Us'}
            </h3>
            <p>
              {'Follow Margarita Humanitarian Foundation for more updates: '}
            </p>
            <a
              className="link link-secondary"
              href="https://www.instagram.com/margaritahforg/"
            >
              {'Instagram'}
            </a>
            {' and '}
            <a
              className="link link-secondary"
              href="https://twitter.com/margaritahforg"
            >
              {'Twitter'}
            </a>
          </div>
          <div className="grid justify-evenly lg:grid-cols-3 inset-x-0 mb-10">
            <div className="max-w-lg px-2 text-center mx-auto">
              <h2 className="m-0 mt-10 mb-2 text-3xl font-bold">
                {'Receipt to Follow'}
              </h2>
              <p>
                {
                  "Your donation is fully tax-deductible. We'll email you a fully-compliant IRS 501(c)(3) donation receipt for your records shortly."
                }
              </p>
            </div>
            <div className="max-w-lg px-2 text-center mx-auto">
              <h2 className="m-0 mt-10 mb-2 text-3xl font-bold">
                {'About Our Donation Software'}
              </h2>
              <p>
                {
                  'This page was put together thanks to the kindness of our volunteers. It went live on August 5, 2021, so pardon the dust if you discover any problems. Thanks for your patience and understanding.'
                }
              </p>
            </div>

            <div className="max-w-lg px-2 text-center mx-auto">
              <h3 className="m-0 mt-10 mb-2 text-3xl font-bold">
                {'Improve our Donation Software'}
              </h3>
              <p>
                {'This donation system is entirely open source on '}
                <a
                  className="link link-secondary"
                  href="https://github.com/margaritahumanitarian/helpafamily"
                >
                  {'GitHub'}
                </a>
                {
                  ". We're looking for volunteer contributors to help make it better. Report bugs or propose ideas for improvements by submitting GitHub issues, or even submit little pull requests as proposals."
                }
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
