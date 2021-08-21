import React from 'react';

import Card, { CardAction, CardParagraph, CardTitle } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 100;

function FallPreventionForEldersCard() {
  const [handleSubmit, isPending] = useStripeSession({
    amount: actionCost,
    cause: 'Provide 1 Fall Prevention Class Seat to an Elder',
  });

  return (
    <Card backgroundImageSource="/images/FallPrevention.jpg">
      <CardTitle>{'Fall Prevention Class'}</CardTitle>
      <CardParagraph>
        {
          'Provide an elderly person with a 6 week course in fall prevention while covering costs such as insurance, curriculum development and review.'
        }
      </CardParagraph>
      <CardAction isPending={isPending} onClick={handleSubmit}>
        {`Provide 1 Seat for $${actionCost}`}
      </CardAction>
    </Card>
  );
}

export default FallPreventionForEldersCard;
