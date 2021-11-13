import React from 'react';

import Card from './Card';

function DoctorsAsVolunteersCard({ simulateHover }) {
  return (
    <Card
      action={'Contact Us'}
      backgroundImageAltText="We are looking for physicians, NPs, and PAs to volunteer"
      backgroundImageSource="/images/Volunteer.jpg"
      isExternal={true}
      link="mailto:hi@mhfcares.org?subject=Volunteer%20as%20Doctor"
      listItems={[
        'Current medical board license for your region and country',
        'Fluency in English or Spanish',
      ]}
      listLabel={'Requirements:'}
      paragraphs={[
        'Doctors, NPs, PAs: Give 1-4 Hours/Week',
        'We are looking for physicians, NPs, and PAs to volunteer for 1-4 hours per week with our Humanitarian Clinic program.',
        'At this stage we particularly need expertise with primary care, although specialties will be very helpful as we grow the program and expand our resources.',
        'Scheduling is flexible and based on your availability.',
      ]}
      simulateHover={simulateHover}
      title={'Doctors as Volunteers'}
    />
  );
}

export default DoctorsAsVolunteersCard;
