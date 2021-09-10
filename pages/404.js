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
        <div className="hero min-h-screen bg-base-200">
          <div className="text-center hero-content">
            <div className="">
              <div className="flex justify-center items-center">
                <div className="lg:w-1/2 pr-4 pl-4">
                  <Image alt="gif" src={ImageGif404} />
                </div>
                <h1 className="m-0 mt-10 mb-2 text-3xl font-bold">
                  {'hello world'}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
