import React from 'react';
import cards from '../constants/cardsData.json';

import CardsLayout from '../components/CardsLayout';
// import ElectronicsDropOffCard from '../components/ElectronicsDropOffCard';
// import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
// import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
// import HealthWorkshopCard from '../components/HealthWorkshopCard';
// import HotMealDayCard from '../components/HotMealDayCard';
// import HotMealDaySection from '../components/HotMealDaySection';
// import HumanitarianClinicCard from '../components/HumanitarianClinicCard';
// import HygieneKitsCard from '../components/HygieneKitsCard';
// import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import Card from '@components/Card';
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
      {/* <HotMealDaySection /> */}
      <CardsLayout description="Our Humanitarian Programs">
        {cards.data.map((cardData) => (
          <Card key={cardData.key} {...cardData} />
        ))}
        {/* <HotMealDayCard />
        <LaptopForFamiliesCard />
        <HumanitarianClinicCard />
        <FallPreventionForEldersCard />
        <FoodDistributionSupportCard />
        <HygieneKitsCard />
        <HealthWorkshopCard />
        <ElectronicsDropOffCard /> */}
      </CardsLayout>
    </PrimaryLayout>
  );
}
