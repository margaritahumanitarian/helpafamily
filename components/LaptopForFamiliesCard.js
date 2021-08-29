import React from 'react';

import Card, { CardAction, CardParagraph, CardTitle } from './Card';

function LaptopForFamiliesCard() {
  return (
    <Card backgroundImageSource="/images/Laptop.jpeg" backgroundImageAltText="Card about Laptops for families">
      <CardTitle>{'Laptop for Families'}</CardTitle>
      <CardParagraph>
        {
          "Mail us your used or new laptop. We'll set up the donated laptops in our public computer room for the families to use for free. Some of the donated laptops will go to the families who don't have home computers, or who don't have enough computers for all their children to use."
        }
      </CardParagraph>

      <CardAction linkTo="/give-devices">{`Donate`}</CardAction>
    </Card>
  );
}

export default LaptopForFamiliesCard;
