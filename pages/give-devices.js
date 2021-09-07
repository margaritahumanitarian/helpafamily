import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

import Footer from '../components/Footer';
import InputFormControl from '../components/form/InputFormControl';
import Modal from '../components/Modal';
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

export default function GiveDevicesPage() {
  const router = useRouter();
  const [modalText, setModalText] = React.useState('');
  const [isModalOpen, setModalOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [country, setCountry] = React.useState(COUNTRIES[0].value);
  const [streetAddress, setStreetAddress] = React.useState('');
  const [streetAddress2, setStreetAddress2] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [originalPurchasePrice, setOriginalPurchasePrice] = React.useState('');
  const [description, setDescription] = React.useState('');

  const hideModal = () => setModalOpen(false);

  const showModal = (message) => {
    setModalText(message);
    setModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim().length === 0) {
      showModal('Please add your name.');
      return;
    }

    if (email.trim().length === 0) {
      showModal('Please add your email address.');
      return;
    }

    if (streetAddress.trim().length === 0) {
      showModal('Please add your street address.');
      return;
    }

    if (city.trim().length === 0) {
      showModal('Please add your city.');
      return;
    }

    if (state.trim().length === 0) {
      showModal('Please add your state or province.');
      return;
    }

    if (postalCode.trim().length === 0) {
      showModal('Please add your postal code.');
      return;
    }

    // Create the donate device request forward to the checkout page
    const response = await fetch('/api/process-device-donation', {
      body: JSON.stringify({
        name,
        email,
        country,
        streetAddress,
        streetAddress2,
        city,
        state,
        postalCode,
        phone,
        originalPurchasePrice,
        description,
      }),
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
        <div className="p-12" style={{ marginTop: '-.5rem' }}>
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 mt-1 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    {'Laptop Donations for Families'}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {`Mail us your used or new laptop. We'll set up the donated laptops in our public computer room for the families to use for free. Some of the donated laptops will go to the families who don't have home computers, or who don't have enough computers for all their children to use.`}
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <div
                  className="card bordered"
                  style={{ border: '2px solid #42B2B8' }}
                >
                  <div className="card-body bg-white">
                    <form onSubmit={handleSubmit}>
                      <h3 className="text-lg font-medium leading-6 text-red-900">
                        {'Required fields are marked with *'}
                      </h3>
                      <InputFormControl
                        id="name"
                        label="Name *"
                        onChange={setName}
                        value={name}
                      />
                      <InputFormControl
                        id="email"
                        label="Email address *"
                        onChange={setEmail}
                        type="email"
                        value={email}
                      />
                      <SelectFormControl
                        id="country"
                        label="Country / Region *"
                        onChange={setCountry}
                        options={COUNTRIES}
                        value={country}
                      />
                      <InputFormControl
                        id="streetAddress"
                        label="Street address *"
                        onChange={setStreetAddress}
                        placeholder="Use an address where you can receive mail."
                        value={streetAddress}
                      />
                      <InputFormControl
                        id="streetAddress2"
                        label="Street address 2"
                        onChange={setStreetAddress2}
                        placeholder="Extra address data can go here"
                        value={streetAddress2}
                      />
                      <InputFormControl
                        id="city"
                        label="City *"
                        onChange={setCity}
                        value={city}
                      />
                      <InputFormControl
                        id="state"
                        label="State / Province *"
                        onChange={setState}
                        value={state}
                      />
                      <InputFormControl
                        id="postalCode"
                        label="ZIP / Postal *"
                        onChange={setPostalCode}
                        value={postalCode}
                      />
                      <InputFormControl
                        id="phone"
                        label="Phone Number"
                        onChange={setPhone}
                        type="tel"
                        value={phone}
                      />
                      <InputFormControl
                        id="originalPurchasePrice"
                        label="Original Purchase Price"
                        onChange={setOriginalPurchasePrice}
                        value={originalPurchasePrice}
                      />
                      <TextareaFormControl
                        id="description"
                        label="Additional information"
                        onChange={setDescription}
                        placeholder="Tell us about each laptop, tablet, and/or smartphone you'd like to donate"
                        value={description}
                      />
                      <div className="mt-4 py-2">
                        <button className="btn btn-accent w-1/3" type="submit">
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
      <Modal isOpen={isModalOpen} onClose={hideModal}>
        {modalText}
      </Modal>
    </>
  );
}
