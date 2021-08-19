import Head from 'next/head';
import React from 'react';

import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
import HealthWorkshopCard from '../components/HealthWorkshopCard';
import HotMealDayCard from '../components/HotMealDayCard';
import HumanitarianClinicCard from '../components/HumanitarianClinicCard';
import HygieneKitsCard from '../components/HygieneKitsCard';
import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import MainDonationForm from '../components/MainDonationForm';

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

      {/* <!-- Hero --> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url(/images/marguerite_960_720.webp)',
        }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div className="text-center hero-content text-neutral-content">
          <div className="w-lg">
            <h1 className="mb-5 text-4xl font-bold">
              {'Help Families in Need'}
            </h1>
            <p className="mb-5">
              {
                'Kindness First. Margarita Humanitarian Foundation helps those who need help the most.'
              }
            </p>
            <div className="md:flex md:justify-center">
              <MainDonationForm />
            </div>
            <div className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-5">
              <Cards />
            </div>
            <p>
              {
                'Margarita Humanitarian Foundation is a 501(c)(3) nonprofit registered in the US.'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
