import React from 'react';

import Card, { CardAddress, CardParagraph, CardTitle } from './Card';

function ElectronicsDropOffCard() {
  return (
    <Card backgroundImageSource="/images/ElectronicsDrop.jpg">
      <CardTitle>{'Electronics Drop-Off Box'}</CardTitle>
      <CardParagraph>
        {
          "Any organization or business around the world can help families get access to technology. Put a donation box in your office for used laptops, tablets, and smartphones. Volunteers will pick up the items periodically, fix them up, and provide them to families in need. You can optionally be involved with refurbishment and placement too if you'd like."
        }
      </CardParagraph>
      <CardAddress label="Email Hi to learn more at:">
        {
          <a
            href="https://www.margaritahumanitarian.org/"
            style={{ color: 'yellow' }}
          >
            {'Margarita Humanitarian Foundation'}
          </a>
        }
      </CardAddress>
    </Card>
  );
}

export default ElectronicsDropOffCard;
