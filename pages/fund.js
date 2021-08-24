import React from 'react';

import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
import HealthWorkshopCard from '../components/HealthWorkshopCard';
import HotMealDayCard from '../components/HotMealDayCard';
import HumanitarianClinicCard from '../components/HumanitarianClinicCard';

export default function FundPage() {
  return (
    <>
      <HumanitarianClinicCard />
      <FallPreventionForEldersCard />
      <FoodDistributionSupportCard />
      <HotMealDayCard />
      <HealthWorkshopCard />
    </>
  );
}
