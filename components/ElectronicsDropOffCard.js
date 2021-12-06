import React from 'react';

import Card, { CardAddress, CardParagraph } from './Card';

function ElectronicsDropOffCard() {
  return (
    <Card
      address={
        <CardAddress label="Email us to learn more at:">
          {
            <a href="mailto:hi@mhfcares.org?subject=Electronics%20Drop-Off%20Box">
              {'hi@mhfcares.org'}
            </a>
          }
        </CardAddress>
      }
      backgroundImageAltText="Help families get access to technology"
      backgroundImageSource="/images/ElectronicsDrop.jpg"
      paragraph={
        <CardParagraph>
          {
            "Any organization or business around the world can help families get access to technology. Put a donation box in your office for used laptops, tablets, and smartphones. Volunteers will pick up the items periodically, fix them up, and provide them to families in need. You can optionally be involved with refurbishment and placement too if you'd like."
          }
        </CardParagraph>
      }
      title={'Electronics Drop-Off Box'}
    />
  );
}

export default ElectronicsDropOffCard;
