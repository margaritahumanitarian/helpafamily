import React from 'react';

import Card, { CardAction, CardParagraph, CardTitle } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 150;

function FoodDistributionSupportCard() {
  const [handleSubmit, isPending] = useStripeSession({
    amount: actionCost,
    cause: 'Producing Food Distribution',
  });

  return (
    <Card
      backgroundImageAltText="Food Distribution Support Card Provide free food boxes for hungry families"
      backgroundImageSource="/images/FoodDistribution.jpg"
    >
      <CardTitle>{'Food Distribution Support'}</CardTitle>
      <CardParagraph>
        {
          'Help us cover our staffing costs for providing free food boxes for hungry families, such as paid time to manage volunteers for food distribution events or coordination with community groups.'
        }
      </CardParagraph>
      <CardAction isPending={isPending} onClick={handleSubmit}>
        {`Support Food Distribution for $${actionCost}`}
      </CardAction>
    </Card>
  );
}

export default FoodDistributionSupportCard;
