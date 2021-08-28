import React from 'react';

function LaptopDonationForm() {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {'information'}
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              {'Use a permanent address where you can receive mail'}
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="first-name"
                    >
                      {'First name'}
                    </label>
                    <input
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="first-name"
                      name="first-name"
                      type="text"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      htmlFor="last-name"
                    >
                      {'Last name'}
                    </label>
                    <input
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="last-name"
                      name="last-name"
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      id="country"
                      name="country"
                    >
                      <option>{'United States'}</option>
                      <option>{'Canada'}</option>
                      <option>{'Mexico'}</option>
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      id="state"
                      name="state"
                      type="text"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-2" />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  {'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LaptopDonationForm;
