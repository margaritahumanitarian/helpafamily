import React from 'react';

import Card, { CardAction, CardParagraph } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 150;

function FoodDistributionSupportCard() {
  const [handleSubmit, isPending] = useStripeSession();

  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: 'Producing Food Distribution',
    });

  return (
    <Card
      actions={
        <CardAction isPending={isPending} onClick={handleOnClick}>
          {`Support Food Distribution for $${actionCost}`}
        </CardAction>
      }
      backgroundImageAltText="Food Distribution Support Card Provide free food boxes for hungry families"
      backgroundImageSource="/images/FoodDistribution.jpg"
      paragraph={
        <CardParagraph>
          {
            'Help us cover our staffing costs for providing free food boxes for hungry families, such as paid time to manage volunteers for food distribution events or coordination with community groups.'
          }
        </CardParagraph>
      }
      title={<>{'Food Distribution Support'}</>}
    />
  );
}

export default FoodDistributionSupportCard;
