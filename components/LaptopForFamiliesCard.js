import React from 'react';

import Card from './Card';

function LaptopForFamiliesCard({ simulateHover }) {
  return (
    <Card
      action={`Donate`}
      backgroundImageAltText="Card about Laptops for families"
      backgroundImageSource="/images/Laptop.jpeg"
      isExternal={true}
      link="https://forms.gle/K5ua2nUyrZ9bv4s3A"
      paragraphs={[
        "Mail us your used or new laptop. We'll set up the donated laptops in our public computer room for the families to use for free. Some of the donated laptops will go to the families who don't have home computers, or who don't have enough computers for all their children to use.",
      ]}
      simulateHover={simulateHover}
      title={'Laptop for Families'}
    />
  );
}

export default LaptopForFamiliesCard;

/* <CardAction linkTo="/give-devices">{`Donate`}</CardAction> */
