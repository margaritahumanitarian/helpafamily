import React from 'react';

import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
import HealthWorkshopCard from '../components/HealthWorkshopCard';
import HotMealDayCard from '../components/HotMealDayCard';
import HumanitarianClinicCard from '../components/HumanitarianClinicCard';
import HygieneKitsCard from '../components/HygieneKitsCard';
import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import ElectronicsDropOffCard from '../components/ElectronicsDropOffCard';

export default function Home() {
  return (
    <>
      <LaptopForFamiliesCard />
      <HumanitarianClinicCard />
      <FallPreventionForEldersCard />
      <FoodDistributionSupportCard />
      <HygieneKitsCard />
      <HotMealDayCard />
      <HealthWorkshopCard />
      <ElectronicsDropOffCard/>
    </>
  );
}
