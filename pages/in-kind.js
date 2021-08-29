import React from 'react';

import HygieneKitsCard from '../components/HygieneKitsCard';
import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import PrimaryLayout from '../components/PrimaryLayout';

export default function InKindPage() {
  return (
    <PrimaryLayout>
      <LaptopForFamiliesCard />
      <HygieneKitsCard />
    </PrimaryLayout>
  );
}
