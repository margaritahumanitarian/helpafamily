import Link from 'next/link';
import React from 'react';

import AstronautLottie from '../components/Astronaut';

export default function NotFound() {
  return (
    <html>
      <head>
        <title>{'404 Not Found'}</title>
      </head>
      <body>
        <div className="hero min-h-screen bg-base-200 bg-white bg-gradient-to-r from-yellow-200 to-green-300">
          <div className="text-center hero-content">
            <div className="">
              <div className="flex justify-center items-center">
                <div className="lg:w-1/2 pr-10 pl-4">
                  <AstronautLottie />
                </div>
                <h1 className="mx-auto mb-2 text-3xl font-bold leading-10 text-gray-600">
                  {'Oops!!!'}
                  <br />
                  {'404 page not found'}
                </h1>
              </div>
              <div>
                <p className="text-gray-600 mt-5">
                  {
                    'The page you requested was not found. Always act in kindness by reporting errors like this '
                  }
                  <Link
                    href="https://github.com/margaritahumanitarian/helpafamily/issues/new/choose"
                    passHref
                  >
                    <span className="text-blue-500">{'here'}</span>
                  </Link>
                </p>
              </div>
              <div>
                <Link href="/" passHref>
                  <button
                    className="bg-transparent mt-10 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    type="button"
                  >
                    {'Home'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
