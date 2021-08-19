import React from 'react';

import Card from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 30;

const HumanitarianClinicCard = () => {
  const handleSubmit = useStripeSession({
    amount: actionCost,
    cause: '1 patient at a free humanitarian clinic',
  });

  return (
    <Card
      action={handleSubmit}
      actionLabel={`Help 1 Patient for ${actionCost}`}
      backgroundImageSource="/images/Humanitarian.jpg"
      text="Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification."
      title="Humanitarian Clinic"
    />
  );
};

export default HumanitarianClinicCard;
