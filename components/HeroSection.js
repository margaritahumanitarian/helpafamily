import Image from 'next/image';
import React from 'react';

import MainDonationForm from './MainDonationForm';

function HeroSection() {
  return (
    <div className="text-center hero-content md:m-auto">
      <div className="w-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 gap-y-5 items-center">
          <div className="md:col-span-1">
            <Image
              alt="Margarita Humanitarian Foundation"
              height={280}
              src="/images/MHF-Color-300x300.png"
              width={280}
            />
          </div>
          <div className="md:col-span-1">
            <h1 className="text-3xl font-bold m-4">
              {'Help Families in Need'}
            </h1>
            <p className="text-xl leading-tight">
              {
                'Margarita Humanitarian Foundation is a non-profit organization that provides humanitarian aid to families in need. We are a 501(c)(3) organization and are registered with the IRS as a charitable organization.'
              }
            </p>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <MainDonationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
