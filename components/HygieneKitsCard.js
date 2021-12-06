import React from 'react';

import Card from './Card';

function HygieneKitsCard({ simulateHover }) {
  return (
    <Card
      action={'96 Hygiene Kits for $153'}
      address={'1543 E Palmdale Blvd, Ste E, Palmdale, CA 93550'}
      addressLabel="Ship the kits to:"
      backgroundImageAltText="Card about Hygiene Kits"
      backgroundImageSource="/images/HygieneKit.webp"
      link="https://www.amazon.com/96-Kits-Hygiene-Travel-Charity/dp/B0881YKMBL"
      paragraphs={[
        'Order a bulk pack of hygiene kits for us to share with people experiencing homelessness.',
        'Each hygiene kit allows an unhoused individual to freshen up and feel more confident about their hygiene for work, school, or even just to have a better day.',
      ]}
      simulateHover={simulateHover}
      title={'Hygiene Kits'}
    />
  );
}

export default HygieneKitsCard;
