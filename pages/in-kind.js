import Card from '@components/Card';
import React from 'react';

import CardsLayout from '../components/CardsLayout';
import PrimaryLayout from '../components/PrimaryLayout';
import cards from '../data/InkindCardsData.json';

export default function InKindPage() {
  return (
    <PrimaryLayout>
      <CardsLayout>
        {cards.data.map((cardData) => (
          <Card key={cardData.key} {...cardData} simulateHover />
        ))}
      </CardsLayout>
    </PrimaryLayout>
  );
}
