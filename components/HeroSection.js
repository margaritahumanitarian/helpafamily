import Image from 'next/image';
import React from 'react';

import MainDonationForm from './MainDonationForm';

function HeroSection({ main = false, image, inNeed = false }) {
  return (
    <div
      className={`text-center ${!main && 'hero-content'} md:m-auto ${
        main && 'pb-20 md:pb-20'
      }`}
    >
      {main && (
        <div className="hero-image-container">
          <Image
            alt="Background"
            className="hero-image"
            layout="fill"
            objectFit="cover"
            src={image}
          />
        </div>
      )}
      <div className={main && 'hero'}>
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
            {main && <div className="bg-image-filter" />}
            <div className={`md:col-span-${main ? '2' : 1} z-10`}>
              <h1
                className={`text-3xl ${
                  main && 'md:text-6xl text-white '
                } font-extrabold m-4 max-w-lg`}
              >
                {'Help Families in Need'}
              </h1>
              <p
                className={`md:text-xl m-5 ${
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
          z-index: -10;
        }
        .bg-image-filter {
          position: absolute;
          z-index: 0;
          top: 64px;
          left: 0;
          min-height: 85vh;
          width: 100%;
          background: linear-gradient(
            to right bottom,
            rgba(54, 38, 9, 0.6),
            rgba(20, 81, 116, 0.3)
          );
          object-fit: cover;
        }
        .hero {
          min-height: 85vh;
        }
        .hero-image-container {
          min-height: 85vh;
          width: 100vw;
          position: absolute;
          z-index: 0;
        }
        .hero-image {
          position: relative; !important
        }
        .description-box {
          padding: 20px;
          /* padding-bottom: 40px; */
          background: linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0.473) 10% 70%, rgba(0, 0, 0, 0));
        }
      `}</style>
    </div>
  );
}

export default HeroSection;
