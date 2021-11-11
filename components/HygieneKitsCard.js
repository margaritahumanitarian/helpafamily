import React from 'react';

import Card, {
  CardAction,
  CardAddress,
  CardParagraph,
  CardTitle,
} from './Card';

function HygieneKitsCard() {
  return (
    <Card
      action={
        <CardAction
          cardStyle={'mb-4'}
          linkTo="https://www.amazon.com/96-Kits-Hygiene-Travel-Charity/dp/B0881YKMBL"
        >
          {'96 Hygiene Kits for $153'}
        </CardAction>
      }
      address={
        <CardAddress label="Ship the kits to:">
          {'1543 E Palmdale Blvd, Ste E, Palmdale, CA 93550'}
        </CardAddress>
      }
      backgroundImageAltText="Card about Hygiene Kits"
      backgroundImageSource="/images/HygieneKit.webp"
      paragraph={
        <>
          <CardParagraph>
            {
              'Order a bulk pack of hygiene kits for us to share with people experiencing homelessness.'
            }
          </CardParagraph>
          <CardParagraph>
            {
              'Each hygiene kit allows an unhoused individual to freshen up and feel more confident about their hygiene for work, school, or even just to have a better day.'
            }
          </CardParagraph>
        </>
      }
      title={<CardTitle>{'Hygiene Kits'}</CardTitle>}
    />
  );
}

export default HygieneKitsCard;
