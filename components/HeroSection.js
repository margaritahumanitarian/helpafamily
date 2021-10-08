// import image from 'next/image';
import Image from 'next/image';
import React from 'react';

import MainDonationForm from './MainDonationForm';

function HeroSection({ main = false, inNeed = false }) {
  return (
    <div
      className={`text-center ${!main && 'hero-content'} md:m-auto ${
        main && 'pb-40 md:pb-20'
      }`}
    >
      <div className={main && `bg-image hero`}>
        <div className="w-lg p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 gap-y-5 items-center">
            {!main && (
              <div className="md:col-span-1">
                <Image
                  alt="Margarita Humanitarian Foundation"
                  height={180}
                  src="/images/MHF-Color-300x300.png"
                  width={180}
                />
              </div>
            )}

            <div className={`md:col-span-${main ? 2 : 1}`}>
              <h1
                className={`text-3xl ${
                  main && 'md:text-5xl text-white text-opacity-90'
                } font-bold m-4 max-w-lg`}
              >
                {'Help Families in Need'}
              </h1>
              <p
                className={`md:text-xl pt-5 ${
                  main && 'text-white text-opacity-90'
                } leading-tight max-w-lg`}
              >
                {
                  'Margarita Humanitarian Foundation is a non-profit organization that provides humanitarian aid to families in need. We are a 501(c)(3) organization and are registered with the IRS as a charitable organization.'
                }
              </p>
            </div>
            <div
              className={`${!main && 'sm:col-span-2 '} md:col-span-1 max-w-md`}
            >
              <MainDonationForm inNeed={inNeed} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-image {
          background-image: linear-gradient(
              to right bottom,
              rgba(90, 76, 16, 0.6),
              rgba(20, 81, 116, 0.3)
            ),
            url(/images/pexels-photo-1206059.jpeg);
          object-fit: cover;
          background-repeat: no-repeat;
        }
        .hero {
          height: 85vh;
        }
      `}</style>
    </div>
  );
}

export default HeroSection;
