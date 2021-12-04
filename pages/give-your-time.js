import Card from '@components/Card';
import React from 'react';

import CardsLayout from '../components/CardsLayout';
import PrimaryLayout from '../components/PrimaryLayout';
import cards from '../constants/cardsData.json';
const doctorsAsVolunteersCardData = cards.data[8];

export default function GiveYourTimePage() {
  return (
    <PrimaryLayout>
      <CardsLayout>
        <Card {...doctorsAsVolunteersCardData} simulateHover />
      </CardsLayout>
    </PrimaryLayout>
  );
}
