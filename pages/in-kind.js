import React from 'react';

import CardsLayout from '../components/CardsLayout';
import HygieneKitsCard from '../components/HygieneKitsCard';
import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import PrimaryLayout from '../components/PrimaryLayout';

export default function InKindPage() {
  return (
    <PrimaryLayout>
      <CardsLayout>
        <LaptopForFamiliesCard />
        <HygieneKitsCard />
      </CardsLayout>
    </PrimaryLayout>
  );
}
