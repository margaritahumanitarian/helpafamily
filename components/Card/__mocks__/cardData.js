export const cardData = {
  title: 'Humanitarian Clinic',
  backgroundImageAltText: 'Card about Humanitarian Clinic',
  backgroundImageSource: '/images/Humanitarian.jpg',
  paragraphs: [
    'Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification.',
  ],
  isExternal: false,
  address: null,
  action: 'Help 1 Patient for ',
  cause: '1 patient at a free humanitarian clinic',
  actionCost: 30,
};

export const cardDataWithExternalLink = {
  title: 'Humanitarian Clinic',
  backgroundImageAltText: 'Card about Humanitarian Clinic',
  backgroundImageSource: '/images/Humanitarian.jpg',
  paragraphs: [
    'Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification.',
  ],
  isExternal: true,
  link: 'www.google.com',
  address: null,
  action: 'Help 1 Patient for ',
  cause: '1 patient at a free humanitarian clinic',
  actionCost: 30,
};

export const cardDataWithSimulateHover = {
  title: 'Humanitarian Clinic',
  backgroundImageAltText: 'Card about Humanitarian Clinic',
  backgroundImageSource: '/images/Humanitarian.jpg',
  paragraphs: [
    'Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification.',
  ],
  isExternal: true,
  simulateHover: true,
  link: 'www.google.com',
  address: null,
  action: 'Help 1 Patient for ',
  cause: '1 patient at a free humanitarian clinic',
  actionCost: 30,
};

export const cardDataWithParagraphsMore170 = {
  title: 'Humanitarian Clinic',
  backgroundImageAltText: 'Card about Humanitarian Clinic',
  backgroundImageSource: '/images/Humanitarian.jpg',
  paragraphs: [
    `Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification.
    Provide a free, anonymous phone or video telehealth consultation for someone afraid to see a doctor, such as a migrant or refugee who lacks identification.`,
  ],
  isExternal: true,
  simulateHover: true,
  link: 'www.google.com',
  address: null,
  action: 'Help 1 Patient for ',
  cause: '1 patient at a free humanitarian clinic',
  actionCost: 30,
};

export const cardDataWithListItems = {
  key: 9,
  title: 'Doctors as Volunteers',
  backgroundImageAltText:
    'We are looking for physicians, NPs, and PAs to volunteer',
  backgroundImageSource: '/images/Volunteer.jpg',
  paragraphs: [
    'Doctors, NPs, PAs: Give 1-4 Hours/Week',
    'We are looking for physicians, NPs, and PAs to volunteer for 1-4 hours per week with our Humanitarian Clinic program.',
    'At this stage we particularly need expertise with primary care, although specialties will be very helpful as we grow the program and expand our resources.',
    'Scheduling is flexible and based on your availability.',
  ],
  link: 'mailto:hi@mhfcares.org?subject=Volunteer%20as%20Doctor',
  address: null,
  isExternal: true,
  action: 'Contact Us',
  actionCost: null,
  cause: 'null',
  listItems: [
    'Current medical board license for your region and country',
    'Fluency in English or Spanish',
  ],
  listLabel: 'Requirements:',
};
