import Card from '@components/Card';
import React from 'react';

import CardsLayout from '../components/CardsLayout';
import PrimaryLayout from '../components/PrimaryLayout';
import cards from '../constants/cardsData.json';

const hygieneKitsCardData = cards.data[4];
const laptopForFamiliesCardData = cards.data[1];

export default function InKindPage() {
  return (
    <PrimaryLayout>
      <CardsLayout>
        <Card {...hygieneKitsCardData} />
        <Card {...laptopForFamiliesCardData} />
      </CardsLayout>
    </PrimaryLayout>
  );
}
