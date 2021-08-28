import React from 'react';

import Card, { CardAction, CardParagraph, CardTitle } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 250;

function HotMealDayCard() {
  const [handleSubmit, isPending] = useStripeSession({
    amount: actionCost,
    cause: 'Hot Meal for 60 Hungry People.',
  });

  return (
    <Card backgroundImageSource="/images/HotMealDay.jpg" backgroundImageAltText="Card about Hot Meal Day">
      <CardTitle>{'Hot Meal Day'}</CardTitle>
      <CardParagraph>
        {
          'Buy ingredients for 1 hot meal for 60 hungry people. Sample meals include spaghetti with Texas toast and caesar salad, chicken alfredo, enchilada taquitos. Served as take-home meal boxes at Grace Resources in Lancaster, California.'
        }
      </CardParagraph>
      <CardAction isPending={isPending} onClick={handleSubmit}>
        {`Feed 60 people for $${actionCost}`}
      </CardAction>
    </Card>
  );
}

export default HotMealDayCard;
