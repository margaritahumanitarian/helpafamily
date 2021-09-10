import Image from 'next/image';
import React from 'react';

import ImageGif404 from '../public/images/404.gif';
export default function NotFound() {
  return (
    <html>
      <head>
        <title> {'404 Not Found'} </title>
      </head>
      <body>
        <div className="hero min-h-screen bg-base-200 bg-white">
          <div className="text-center hero-content">
            <div className="">
              <div className="flex justify-center items-center">
                <div className="lg:w-1/2 pr-4 pl-4">
                  <Image alt="gif" src={ImageGif404} />
                </div>
                <h1 className="mx-auto mb-2 text-3xl font-bold leading-10">
                  {'Oops!!!'}
                  <br />
                  {'404 page not found'}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
