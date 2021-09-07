import React from 'react';

import Card, { CardAddress, CardParagraph, CardTitle } from './Card';

function DoctorsAsVolunteers() {
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
      <CardAddress>
        <div className="p-2">
          <span className="font-semibold">{'Requirements:'}</span>
          <ul className="list-disc text-left pl-6">
            <li>
              {'Current medical board license for your region and country'}
            </li>
            <li>{'Fluency in English or Spanish'}</li>
          </ul>
        </div>
      </CardAddress>
    </Card>
  );
}

export default DoctorsAsVolunteers;
