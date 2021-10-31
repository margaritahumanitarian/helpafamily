import React from 'react';

import CardsLayout from '../components/CardsLayout';
import ElectronicsDropOffCard from '../components/ElectronicsDropOffCard';
import EmailCapture from '../components/email/EmailCapture';
import FallPreventionForEldersCard from '../components/FallPreventionForEldersCard';
import FoodDistributionSupportCard from '../components/FoodDistributionSupportCard';
import HealthWorkshopCard from '../components/HealthWorkshopCard';
import HotMealDayCard from '../components/HotMealDayCard';
import HotMealDaySection from '../components/HotMealDaySection';
import HumanitarianClinicCard from '../components/HumanitarianClinicCard';
import HygieneKitsCard from '../components/HygieneKitsCard';
import InteractiveSection from '../components/email/InteractiveSection';
import LaptopForFamiliesCard from '../components/LaptopForFamiliesCard';
import PrimaryLayout from '../components/PrimaryLayout';
import SurveySection from '../components/email/SurveySections';
import Thankyou from '../components/email/Thankyou';
import ThankyouEmail from '../components/email/ThankyouEmail';
import heroImages from 'constants/heroImages';

export const getStaticProps = async () => {
  const date = new Date();
  const selectedImage = date.getDay();
  const image = heroImages[selectedImage];
  return {
    props: { image },
  };
};

export default function Home({ image }) {
  return (
    <PrimaryLayout image={image} inNeed main>
      <HotMealDaySection />
      <CardsLayout description="Our Humanitarian Programs">
        <HotMealDayCard />
        <LaptopForFamiliesCard />
        <HumanitarianClinicCard />
        <FallPreventionForEldersCard />
        <FoodDistributionSupportCard />
        <HygieneKitsCard />
        <HealthWorkshopCard />
        <ElectronicsDropOffCard />
      </CardsLayout>
      <InteractiveSection>
        <EmailCapture />
        <ThankyouEmail />
        <SurveySection />
        <Thankyou />
      </InteractiveSection>
    </PrimaryLayout>
  );
}
