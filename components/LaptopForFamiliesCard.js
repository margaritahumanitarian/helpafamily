import React from 'react';

import Card, { CardAddress, CardParagraph, CardTitle } from './Card';

const LaptopForFamiliesCard = () => (
  <Card backgroundImageSource="/images/Laptop.jpeg">
    <CardTitle>{'Laptop for Families'}</CardTitle>
    <CardParagraph>
      {
        "Mail us your used or new laptop. We'll set up the donated laptops in our public computer room for the families to use for free. Some of the donated laptops will go to the families who don't have home computers, or who don't have enough computers for all their children to use."
      }
    </CardParagraph>
    <CardAddress label="Ship the laptops to:">
      {'1543 E Palmdale Blvd, Ste E, Palmdale, CA 93550'}
    </CardAddress>
  </Card>
);

export default LaptopForFamiliesCard;
