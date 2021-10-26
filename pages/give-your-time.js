import React from 'react';

import CardsLayout from '../components/CardsLayout';
import DoctorsAsVolunteers from '../components/DoctorsAsVolunteers';
import PrimaryLayout from '../components/PrimaryLayout';

export default function GiveYourTimePage() {
  return (
    <PrimaryLayout>
      <CardsLayout>
        <DoctorsAsVolunteers />
      </CardsLayout>
    </PrimaryLayout>
  );
}
