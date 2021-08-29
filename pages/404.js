import React from 'react';

import Card, { CardParagraph, CardTitle } from '../components/Card';
import PrimaryLayout from '../components/PrimaryLayout';

export default function NotFound() {
  return (
    <>
      <PrimaryLayout />
      <Card backgroundImageSource="/images/Volunteer.jpg">
        <CardTitle>{'404 Page Not Found'}</CardTitle>
        <CardParagraph>
          {
            ' The page you requested was not found. Always act in kindness by reporting errors like this at https://github.com/margaritahumanitarian/helpafamily/issues/new/choose'
          }
        </CardParagraph>
      </Card>
    </>
  );
}
