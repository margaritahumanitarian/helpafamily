import React from 'react';

import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
import HealthWorkshopCard from '../components/HealthWorkshopCard';
import HotMealDayCard from '../components/HotMealDayCard';
import HumanitarianClinicCard from '../components/HumanitarianClinicCard';
import PrimaryLayout from '../components/PrimaryLayout';

export default function FundPage() {
  return (
    <PrimaryLayout>
      <HumanitarianClinicCard />
      <FallPreventionForEldersCard />
      <FoodDistributionSupportCard />
      <HotMealDayCard />
      <HealthWorkshopCard />
    </PrimaryLayout>
  );
}
