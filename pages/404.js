import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <html>
      <head>
        <title> {'404 Not Found'} </title>
      </head>
      <body>
        <div className="container mx-auto mx-auto ">
          <div className="flex flex-wrap items-center justify-center">
            <div className="lg:w-1/2 pr-4 pl-4 vmb-2 font-medium leading-tight text-4xl00 h-screen">
              <img alt="gif" src="/images/404.gif"/>
            </div>
            <div className=":flex-growlg-6 m-auto h-screen">
              <h1 className="m-0 mt-10 mb-2 text-3xl font-bold">
                {'hello world'}
              </h1>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
