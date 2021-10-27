import React from 'react';

import CardsLayout from '../components/CardsLayout';
import ElectronicsDropOffCard from '../components/ElectronicsDropOffCard';
import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
import HealthWorkshopCard from '../components/HealthWorkshopCard';
import HotMealDayCard from '../components/HotMealDayCard';
import HotMealDaySection from '../components/HotMealDaySection';
import HumanitarianClinicCard from '../components/HumanitarianClinicCard';
import HygieneKitsCard from '../components/HygieneKitsCard';
import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import PrimaryLayout from '../components/PrimaryLayout';

export const getStaticProps = async () => {
  const date = new Date();
  const image = date.getDay();
  return {
    props: { image },
  };
};

export default function Home({ image }) {
  return (
    <PrimaryLayout image={image} inNeed main>
      <HotMealDaySection />
      <CardsLayout description="Our Humanitarian Programs">
        <LaptopForFamiliesCard />
        <HumanitarianClinicCard />
        <FallPreventionForEldersCard />
        <FoodDistributionSupportCard />
        <HygieneKitsCard />
        <HotMealDayCard />
        <HealthWorkshopCard />
        <ElectronicsDropOffCard />
      </CardsLayout>
    </PrimaryLayout>
  );
}
