import React from 'react';

import Card, { CardAction, CardParagraph } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 100;

function FallPreventionForEldersCard() {
  const [handleSubmit, isPending] = useStripeSession();

  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: 'Provide 1 Fall Prevention Class Seat to an Elder',
    });

  return (
    <Card
      action={
        <CardAction isPending={isPending} onClick={handleOnClick}>
          {`Provide 1 Seat for $${actionCost}`}
        </CardAction>
      }
      backgroundImageAltText="Fall Prevention Card Provide an elderly person with a 6 week course in fall prevention"
      backgroundImageSource="/images/FallPrevention.jpg"
      paragraph={
        <CardParagraph>
          {
            'Provide an elderly person with a 6 week course in fall prevention while covering costs such as insurance, curriculum development and review.'
          }
        </CardParagraph>
      }
      title={<>{'Fall Prevention Class'}</>}
    />
  );
}

export default FallPreventionForEldersCard;
