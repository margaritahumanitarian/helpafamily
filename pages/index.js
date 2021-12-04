import React from 'react';
import cards from '../constants/cardsData.json';

import Card from '@components/Card';
import CardsLayout from '../components/CardsLayout';
import PrimaryLayout from '../components/PrimaryLayout';
import heroImages from 'constants/heroImages';
export const getStaticProps = async () => {
  const date = new Date();
  const selectedImage = date.getDay();
  const image = heroImages[selectedImage];
  return {
    props: { image },
    revalidate: 86400, // every day
  };
};

export default function Home({ image }) {
  return (
    <PrimaryLayout image={image} inNeed main>
      <CardsLayout description="Our Humanitarian Programs">
        {cards.data.map((cardData) => (
          <Card key={cardData.key} {...cardData} />
        ))}
      </CardsLayout>
    </PrimaryLayout>
  );
}
