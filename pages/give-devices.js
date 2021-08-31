import React from 'react';

import Footer from '../components/Footer';

export default function GiveYourTimePage() {
  return (
    <html>
      <head>
        <title> {'Donate Devices'} </title>
      </head>
      <body>
        <div className="m-auto w-3/4 p-10 my-20 bg-green-300 border border-gray-300">
          <div className="bg-gray-100 flex justify-center mb-5">
            <p className="mt-1 text-xl text-black-600">
              {
                'This section is still being worked on, please contact us at the following email instead: '
              }
              <a
                className="mt-1 text-xl underline"
                href="mailto:hi@mhfcares.org"
              >
                {'hi@mhfcares.org'}
              </a>
            </p>
            <br />
          </div>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {'Personal Information'}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {'Use a permanent address where you can receive mail.'}
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div className="shadow  sm:rounded-md">
                    <div className="px-4 py-5 bg-white border border-gray-300 sm:p-6 ">
                      <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="name"
                          >
                            {'Name'}
                          </label>
                          <input
                            autoComplete="name"
                            className="mt-1 block w-full shadow-sm sm:text-lg border border-gray-300 bg-white rounded-md "
                            id="name"
                            name="name"
                            type="text"
                          />
                        </div>                        
                        <div className="col-span-6 sm:col-span-4">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="email-address"
                          >
                            {'Email address'}
                          </label>
                          <input
                            autoComplete="email"
                            className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                            id="email-address"
                            name="email-address"
                            type="text"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="country"
                          >
                            {'Country / Region'}
                          </label>
                          <select
                            autoComplete="country"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                            id="country"
                            name="country"
                          >
                            <option> {'United States'} </option>
                            <option> {'Canada'} </option>
                            <option> {'Mexico'} </option>
                            <option> {'Germany'} </option>
                            <option> {'Latvia'} </option>
                            <option> {'India'} </option>
                            <option> {'Bangladesh'} </option>
                            <option> {'Philippines'} </option>
                          </select>
                        </div>
                        <div className="col-span-6">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="street-address"
                          >
                            {'Street address'}
                          </label>
                          <input
                            autoComplete="street-address"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border border-gray-300 rounded-md"
                            id="street-address"
                            name="street-address"
                            type="text"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="city"
                          >
                            {'City'}
                          </label>
                          <input
                            className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                            id="city"
                            name="city"
                            type="text"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="state"
                          >
                            {'State / Province'}
                          </label>
                          <input
                            className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                            id="state"
                            name="state"
                            type="text"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="postal-code"
                          >
                            {'ZIP / Postal'}
                          </label>
                          <input
                            autoComplete="postal-code"
                            className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                            id="postal-code"
                            name="postal-code"
                            type="text"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="phone-number"
                          >
                            {'Phone Number'}
                          </label>
                          <input
                            autoComplete="phone-number"
                            className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                            id="phone-number"
                            name="phone-number"
                            type="text"
                          />
                        </div>                          
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            className="block text-sm font-medium text-gray-700"
                            htmlFor="value-of-device"
                          >
                            {'Value of Device'}
                          </label>
                          <input
                            autoComplete="value-of-device"
                            className="mt-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md"
                            id="value-of-device"
                            name="value-of-device"
                            type="text"
                          />
                        </div>                        
                        <div className="col-span-6 ">
                          <div className="form-control">
                            <textarea
                              className="textarea h-24 textarea-bordered"
                              placeholder="Tell us about each laptop, tablet, and/or smartphone you'd like to donate"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                      <button
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled="disabled"
                        type="submit"
                      >
                        {'Save'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
