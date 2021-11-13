import React from 'react';

// import CardsLayout from '../components/CardsLayout';
import DoctorsAsVolunteersCard from '../components/DoctorsAsVolunteersCard';
import PrimaryLayout from '../components/PrimaryLayout';

export default function GiveYourTimePage() {
  return (
    <PrimaryLayout>
      {/* <CardsLayout> */}
      <DoctorsAsVolunteersCard simulateHover={true} />
      {/* </CardsLayout> */}
    </PrimaryLayout>
  );
}
