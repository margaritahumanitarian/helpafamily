import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
import Footer from '../components/Footer';
import HealthWorkshopCard from '../components/HealthWorkshopCard';
import HotMealDayCard from '../components/HotMealDayCard';
import HumanitarianClinicCard from '../components/HumanitarianClinicCard';
import HygieneKitsCard from '../components/HygieneKitsCard';
import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import MainDonationForm from '../components/MainDonationForm';
import Navbar from '../components/Navbar';

const ListOfCards = [
  {
    card: <HealthWorkshopCard />,
    amount: 5000,
    id: 'health workshop',
  },
  {
    card: <HygieneKitsCard />,
    amount: 153,
    id: 'hygiene kits',
  },
  {
    card: <LaptopForFamiliesCard />,
    amount: 0,
    id: 'laptop for families',
  },
  {
    card: <HotMealDayCard />,
    amount: 250,
    id: 'hot meal day',
  },
  {
    card: <FoodDistributionSupportCard />,
    amount: 150,
    id: 'food distribution support',
  },
  {
    card: <HumanitarianClinicCard />,
    amount: 30,
    id: 'humanitarian clinic',
  },
  {
    card: <FallPreventionForEldersCard />,
    amount: 100,
    id: 'fall prevention',
  },
];

const sortedCards = [...ListOfCards];
sortedCards.sort((a, b) => a.amount - b.amount);

const Cards = () =>
  sortedCards.map(({ card, id }) => (
    <div className="md:flex md:items-stretch" key={id}>
      {card}
      <br />
    </div>
  ));

export default function Home() {
  return (
    <div>
      <Head>
        <title>{'Donate to Margarita Humanitarian Foundation'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="text-center hero-content text-neutral-content">
        <div className="w-lg">
          <div className="md:grid md:grid-cols-3 md:gap-x-8 md-gap-y-5">
            <div className="md:col-span-1">
              <Image
                src="/images/MHF-Color-300x300.png"
                alt="Margarita Humanitarian Foundation"
                width={280}
                height={280}
              />
            </div>
            <div className="md:col-span-1">
              <h1 className="text-3xl font-bold m-4">
                {'Help Families in Need'}
              </h1>
              <p className="text-xl leading-tight">
                {
                  'Margarita Humanitarian Foundation is a non-profit organization that provides humanitarian aid to families in need. We are a 501(c)(3) organization and are registered with the IRS as a charitable organization.'
                }
              </p>
            </div>
            <div className="md:col-span-1">
              <MainDonationForm />
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-5">
            <Cards />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
