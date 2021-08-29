import React from 'react';

import ElectronicsDropOffCard from '../components/ElectronicsDropOffCard';
import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
import HealthWorkshopCard from '../components/HealthWorkshopCard';
import HotMealDayCard from '../components/HotMealDayCard';
import HumanitarianClinicCard from '../components/HumanitarianClinicCard';
import HygieneKitsCard from '../components/HygieneKitsCard';
import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import PrimaryLayout from '../components/PrimaryLayout';

export default function Home() {
  return (
    <PrimaryLayout>
      <LaptopForFamiliesCard />
      <HumanitarianClinicCard />
      <FallPreventionForEldersCard />
      <FoodDistributionSupportCard />
      <HygieneKitsCard />
      <HotMealDayCard />
      <HealthWorkshopCard />
      <ElectronicsDropOffCard />
    </PrimaryLayout>
  );
}
