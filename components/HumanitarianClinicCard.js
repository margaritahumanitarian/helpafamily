import React from 'react';

import Card, { CardAction, CardParagraph, CardTitle } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 30;

function HumanitarianClinicCard() {
  const [handleSubmit, isPending] = useStripeSession();

  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: '1 patient at a free humanitarian clinic',
    });

  return (
    <Card
      backgroundImageAltText="Card about Humanitarian Clinic"
      backgroundImageSource="/images/Humanitarian.jpg"
    >
      <CardTitle>{'Humanitarian Clinic'}</CardTitle>
      <CardParagraph>
        {
          'Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification.'
        }
      </CardParagraph>
      <CardAction isPending={isPending} onClick={handleOnClick}>
        {`Help 1 Patient for $${actionCost}`}
      </CardAction>
    </Card>
  );
}

export default HumanitarianClinicCard;
