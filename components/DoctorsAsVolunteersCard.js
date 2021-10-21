import React from 'react';

import Card, {
  CardAction,
  CardParagraph,
  CardTitle,
  PositionRequirements,
} from './Card';

function DoctorsAsVolunteersCard() {
  return (
    <Card backgroundImageSource="/images/Volunteer.jpg">
      <CardTitle>{'Doctors as Volunteers'}</CardTitle>

      <CardParagraph>{'Doctors, NPs, PAs: Give 1-4 Hours/Week'}</CardParagraph>

      <CardParagraph>
        {
          'We are looking for physicians, NPs, and PAs to volunteer for 1-4 hours per week with our Humanitarian Clinic program.'
        }
      </CardParagraph>

      <CardParagraph>
        {
          'At this stage we particularly need expertise with primary care, although specialties will be very helpful as we grow the program and expand our resources.'
        }
      </CardParagraph>
      <CardParagraph>
        {'Scheduling is flexible and based on your availability.'}
      </CardParagraph>
      <br />
      <PositionRequirements label={'Requirements:'}>
        {'Current medical board license for your region and country'}
        {'Fluency in English or Spanish'}
      </PositionRequirements>
      <CardAction linkTo="mailto:hi@mhfcares.org?subject=Volunteer%20as%20Doctor">
        {'Contact Us'}
      </CardAction>
    </Card>
  );
}

export default DoctorsAsVolunteersCard;
