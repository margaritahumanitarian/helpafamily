import React from 'react';

import Card, { CardAction, CardParagraph, CardTitle } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 30;

const HumanitarianClinicCard = () => {
  const [handleSubmit, isPending] = useStripeSession({
    amount: actionCost,
    cause: '1 patient at a free humanitarian clinic',
  });

  return (
    <Card backgroundImageSource="/images/Humanitarian.jpg">
      <CardTitle>{'Humanitarian Clinic'}</CardTitle>
      <CardParagraph>
        {
          'Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification.'
        }
      </CardParagraph>
      <CardAction isPending={isPending} onClick={handleSubmit}>
        {`Help 1 Patient for $${actionCost}`}
      </CardAction>
    </Card>
  );
};

export default HumanitarianClinicCard;
