import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';


import Footer from '../components/Footer';
import InputFormControl from '../components/form/InputFormControl';
import Navbar from '../components/Navbar';
import SelectFormControl from '../components/form/SelectFormControl';
import TextareaFormControl from '../components/form/TextareaFormControl';

// Use ISO 3166 country codes per https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
const COUNTRIES = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'MX', label: 'Mexico' },
  { value: 'DE', label: 'Germany' },
  { value: 'LV', label: 'Latvia' },
  { value: 'IN', label: 'India' },
  { value: 'BD', label: 'Bangladesh' },
  { value: 'PH', label: 'Philippines' },
];

function validateField(name, value, errors){
  value = value || ''
  if (value.trim().length === 0){
    errors.push(name)
  }
  return errors
}

export default function GiveDevicesPage() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [country, setCountry] = React.useState(COUNTRIES[0].id);
  const [streetAddress, setStreetAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [valueOfDevice, setValueOfDevice] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    let errors = [];

    errors = validateField("name", name, errors);
    errors = validateField("email", email, errors);
    errors = validateField("streetAddress", streetAddress, errors);
    errors = validateField("city", city, errors);
    errors = validateField("state", state, errors);
    errors = validateField("postalCode", postalCode, errors);

    if (errors.length > 0){
      alert(`Missing fields: ${errors}`)
      return;
    }

    // Create the Stripe checkout session and forward to the checkout page
    const response = await fetch('/api/process-device-donation', {
      body: JSON.stringify({
        name,
        email,
        country,
        streetAddress,
        city,
        state,
        postalCode,
        phoneNumber,
        valueOfDevice,
        description
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const result = await response.json();
    router.push('/thank-you');    

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
                      <h3 className="text-lg font-medium leading-6 text-red-900">{'Required fields'}</h3>
                      <InputFormControl
                        id="name"
                        label="Name"
                        onChange={setName}
                        value={name}
                      />
                      <InputFormControl
                        id="email"
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
                        id="streetAddress"
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
                        id="postalCode"
                        label="ZIP / Postal"
                        onChange={setPostalCode}
                        value={postalCode}
                      />
                      <div class="divider"></div> 
                      <h3 className="text-lg font-medium leading-6 text-gray-900">{'Optional fields'}</h3>
                      <InputFormControl
                        id="phone"
                        label="Phone Number"
                        onChange={setPhoneNumber}
                        type="tel"
                        value={phoneNumber}
                      />
                      <InputFormControl
                        id="originalPurchasePrice"
                        label="Original Purchase Price"
                        onChange={setValueOfDevice}
                        value={valueOfDevice}
                      />
                      <TextareaFormControl
                        id="description"
                        label="Additional information"
                        onChange={setDescription}
                        placeholder="Tell us about each laptop, tablet, and/or smartphone you'd like to donate"
                        value={description}
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
