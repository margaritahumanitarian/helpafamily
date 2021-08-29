import React from 'react';

import Card, { CardParagraph, CardTitle } from '../components/Card';
import PrimaryLayout from '../components/PrimaryLayout';


export default function NotFound() {
  return (
    <>
      <PrimaryLayout />
      <Card backgroundImageSource="/images/Volunteer.jpg">
        <CardTitle>{'404 Page Not Found'}</CardTitle>

        <CardParagraph>{'Always act in kindness'}</CardParagraph>        
      </Card>
    </>
  );
}
