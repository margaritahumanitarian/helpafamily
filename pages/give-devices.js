import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import Footer from '../components/Footer';
import InputFormControl from '../components/form/InputFormControl';
import Navbar from '../components/Navbar';
import SelectFormControl from '../components/form/SelectFormControl';
import TextareaFormControl from '../components/form/TextareaFormControl';

// Use ISO 3166 country codes per https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
const countryList = require('country-list');

const COUNTRIES = countryList
  .getNames()
  .sort((a, b) => (a > b && 1) || -1)
  .map((value) => {
    return { label: value };
  });

const formDataInitialState = {
  name: '',
  email: '',
  country: COUNTRIES[235].value,
  streetAddress: '',
  streetAddress2: '',
  city: '',
  state: '',
  postalCode: '',
  phone: '',
  originalPurchasePrice: '',
  description: '',
};

const isEmptyValidator = (value) => value.trim().length !== 0;

const validations = {
  name: {
    error: 'Please add your name.',
    validator: isEmptyValidator,
  },
  email: {
    error: 'Please add your email address.',
    validator: isEmptyValidator,
  },
  streetAddress: {
    error: 'Please add your street address.',
    validator: isEmptyValidator,
  },
  city: {
    error: 'Please add your city.',
    validator: isEmptyValidator,
  },
  state: {
    error: 'Please add your state or province.',
    validator: isEmptyValidator,
  },
  postalCode: {
    error: 'Please add your postal code.',
    validator: isEmptyValidator,
  },
};

export default function GiveDevicesPage() {
  const router = useRouter();
  const [formData, setFormData] = React.useState(formDataInitialState);
  const [errors, setErrors] = React.useState({});

  const handleChange = (fieldName) => (value) =>
    setFormData({ ...formData, [fieldName]: value });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const foundErrors = Object.entries(validations).reduce(
      (memo, [key, { error, validator }]) => {
        memo[key] = validator(formData[key]) ? null : error;
        return memo;
      },
      {}
    );

    if (Object.entries(foundErrors).filter(Boolean)) {
      setErrors(foundErrors);
      return;
    }

    // Create the donate device request forward to the checkout page
    const response = await fetch('/api/process-device-donation', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    await response.json();
    router.push('/thank-you');
  };

  return (
    <>
      <Head>
        <title>{'Donate Devices'}</title>
      </Head>
      <Navbar />
      <main>
        <div className="p-4">
          <div className="sm:p-8">
            <div className="sm:mt-0 md-mt-10 mb-5">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1 mb-5">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      {'Laptop Donations for Families'}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {`Mail us your used or new laptop. We'll set up the donated laptops in our public computer room for the families to use for free. Some of the donated laptops will go to the families who don't have home computers, or who don't have enough computers for all their children to use.`}
                    </p>
                  </div>
                </div>
                <div className="md:mt-0 md-mt-10 md:col-span-2">
                  <div className="card shadow-2xl">
                    <div className="card-body bg-green-50">
                      <form onSubmit={handleSubmit}>
                        <h3 className="text-lg font-medium leading-6 text-red-900">
                          {'Required fields are marked with *'}
                        </h3>
                        <InputFormControl
                          error={errors['name']}
                          id="name"
                          label="Name"
                          onChange={handleChange('name')}
                          required
                          value={formData['name']}
                        />
                        <InputFormControl
                          error={errors['email']}
                          id="email"
                          label="Email address"
                          onChange={handleChange('email')}
                          required
                          type="email"
                          value={formData['email']}
                        />
                        <SelectFormControl
                          id="country"
                          label="Country / Region"
                          onChange={handleChange('country')}
                          options={COUNTRIES}
                          value={formData['country']}
                        />
                        <InputFormControl
                          error={errors['streetAddress']}
                          id="streetAddress"
                          label="Street address"
                          onChange={handleChange('streetAddress')}
                          placeholder="Use an address where you can receive mail."
                          required
                          value={formData['streetAddress']}
                        />
                        <InputFormControl
                          id="streetAddress2"
                          label="Street address 2"
                          onChange={handleChange('streetAddress2')}
                          placeholder="Extra address data can go here"
                          value={formData['streetAddress2']}
                        />
                        <InputFormControl
                          error={errors['city']}
                          id="city"
                          label="City"
                          onChange={handleChange('city')}
                          required
                          value={formData['city']}
                        />
                        <InputFormControl
                          error={errors['state']}
                          id="state"
                          label="State / Province"
                          onChange={handleChange('state')}
                          required
                          value={formData['state']}
                        />
                        <InputFormControl
                          error={errors['postalCode']}
                          id="postalCode"
                          label="ZIP / Postal"
                          onChange={handleChange('postalCode')}
                          required
                          value={formData['postalCode']}
                        />
                        <InputFormControl
                          id="phone"
                          label="Phone Number"
                          onChange={handleChange('phone')}
                          type="tel"
                          value={formData['phone']}
                        />
                        <InputFormControl
                          id="originalPurchasePrice"
                          label="Original Purchase Price"
                          onChange={handleChange('originalPurchasePrice')}
                          value={formData['originalPurchasePrice']}
                        />
                        <TextareaFormControl
                          id="description"
                          label="Additional information"
                          onChange={handleChange('description')}
                          placeholder="Tell us about each laptop, tablet, and/or smartphone you'd like to donate"
                          value={formData['description']}
                        />
                        <div className="py-2">
                          <button
                            className="btn btn-accent w-2/5"
                            type="submit"
                          >
                            {'Send'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
