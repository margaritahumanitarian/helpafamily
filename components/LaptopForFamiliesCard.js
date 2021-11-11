import React from 'react';

import Card, { CardAction, CardParagraph } from './Card';

function LaptopForFamiliesCard() {
  return (
    <Card
      action={
        <CardAction linkTo="https://forms.gle/K5ua2nUyrZ9bv4s3A">{`Donate`}</CardAction>
      }
      backgroundImageAltText="Card about Laptops for families"
      backgroundImageSource="/images/Laptop.jpeg"
      paragraph={
        <CardParagraph>
          {
            "Mail us your used or new laptop. We'll set up the donated laptops in our public computer room for the families to use for free. Some of the donated laptops will go to the families who don't have home computers, or who don't have enough computers for all their children to use."
          }
        </CardParagraph>
      }
      title={'Laptop for Families'}
    />
  );
}

export default LaptopForFamiliesCard;

/* <CardAction linkTo="/give-devices">{`Donate`}</CardAction> */
