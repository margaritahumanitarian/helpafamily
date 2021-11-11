import React from 'react';

import Card, { CardAction, CardParagraph } from './Card';
import useStripeSession from '../hooks/useStripeSession';

const actionCost = 2000;

function HealthWorkshopCard() {
  const [handleSubmit, isPending] = useStripeSession();

  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: 'Creating a Health Workshop',
    });

  return (
    <Card
      action={
        <CardAction isPending={isPending} onClick={handleOnClick}>
          {`Create 1 Workshop for $${actionCost}`}
        </CardAction>
      }
      backgroundImageAltText="Card about Health Education Workshop"
      backgroundImageSource="/images/HealthWorkshop.jpg"
      paragraph={
        <>
          <CardParagraph>
            {
              'Help in establishing one free health education workshop for a community that is facing major disparities in health conditions and to help those people who need care and attention.'
            }
          </CardParagraph>
          <CardParagraph>
            {
              'Also, your donation will go toward health-themed mini gift bags to motivate people to attend a workshop, equipment such as trainer simulaids for edema and breast disease, venue costs, and to hire public health educators to prepare presentations.'
            }
          </CardParagraph>
        </>
      }
      title={<>{'Health Education Workshop'}</>}
    />
  );
}

export default HealthWorkshopCard;
