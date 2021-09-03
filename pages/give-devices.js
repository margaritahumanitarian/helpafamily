import Head from 'next/head';
import React from 'react';

import Footer from '../components/Footer';
import InputFormControl from '../components/form/InputFormControl';
import Navbar from '../components/Navbar';
import SelectFormControl from '../components/form/SelectFormControl';
import TextareaFormControl from '../components/form/TextareaFormControl';

const COUNTRIES = [
  { value: 'united-states', label: 'United States' },
  { value: 'canada', label: 'Canada' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'germany', label: 'Germany' },
  { value: 'latvia', label: 'Latvia' },
  { value: 'india', label: 'India' },
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'philippines', label: 'Philippines' },
];

export default function GiveDevicesPage() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [country, setCountry] = React.useState(COUNTRIES[0].id);
  const [streetAddress, setStreetAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [about, setAbout] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      firstName,
      lastName,
      email,
      country,
      streetAddress,
      city,
      state,
      postalCode,
      about,
    });
  };

  return (
    <>
      <Head>
        <title>{'Donate Devices'}</title>
      </Head>
      <Navbar />
      <main>
        <div className="m-auto w-3/4 p-10 my-10 bg-green-300 border border-gray-300">
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
                <div className="card bordered">
                  <div className="card-body bg-white">
                    <form onSubmit={handleSubmit}>
                      <InputFormControl
                        id="first-name"
                        label="First name"
                        onChange={setFirstName}
                        value={firstName}
                      />
                      <InputFormControl
                        id="last-name"
                        label="Last name"
                        onChange={setLastName}
                        value={lastName}
                      />
                      <InputFormControl
                        id="email-address"
                        label="Email address"
                        onChange={setEmail}
                        type="email"
                        value={email}
                      />
                      <SelectFormControl
                        id="country"
                        label="Country / Region"
                        onChange={setCountry}
                        options={COUNTRIES}
                        value={country}
                      />
                      <InputFormControl
                        id="street-address"
                        label="Street address"
                        onChange={setStreetAddress}
                        value={streetAddress}
                      />
                      <InputFormControl
                        id="city"
                        label="City"
                        onChange={setCity}
                        value={city}
                      />
                      <InputFormControl
                        id="state"
                        label="State / Province"
                        onChange={setState}
                        value={state}
                      />
                      <InputFormControl
                        id="postal-code"
                        label="ZIP / Postal"
                        onChange={setPostalCode}
                        value={postalCode}
                      />
                      <TextareaFormControl
                        id="about"
                        label="Additional information"
                        onChange={setAbout}
                        placeholder="Tell us about each laptop, tablet, and/or smartphone you'd like to donate"
                        value={about}
                      />
                      <div className="flex items-center justify-center py-2">
                        <button className="btn btn-primary" type="submit">
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
        <Footer />
      </main>
    </>
  );
}
