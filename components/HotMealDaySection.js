import Image from 'next/image';
import React from 'react';

function HotMealDaySection() {
  return (
    <div className="text-center md:mx-10 pb-20 hot-meal-day">
      <div className="w-lg p-5 pb-10 section-shadow">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="space-y-3 p-14 pr-10 md:text-left">
            <h2 className="text-3xl md:text-5xl md:text-left pb-7 font-bold">
              {'Hot Meal Day'}
            </h2>
            <p>
              {
                'Buy ingredients for 1 hot meal for 60 hungry people. Sample meals include spaghetti with Texas toast and caesar salad, chicken alfredo, enchilada taquitos. Served as take-home meal boxes at Grace Resources in Lancaster, California.'
              }
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:items-end">
              <p className="md:col-span-2">
                {
                  'Help us by donating your time or money. A small donation can help us bring hot meals to the most needy in our society.'
                }
              </p>
              <a
                className="lg:ml-auto"
                href="https://www.margaritahumanitarian.org/upcoming-events#h.3f0nxu3620tm"
              >
                <button
                  className="btn btn-accent rounded-sm mt-5"
                  type="button"
                >
                  {'Read More'}
                </button>
              </a>
            </div>
          </div>
          <Image
            alt={'Hot Meal Day'}
            height="280"
            layout="responsive"
            objectFit="cover"
            src={'/images/HotMealDay.jpg'}
            width="400"
          />
        </div>
      </div>
      <style jsx>{`
        .hot-meal-day {
          min-height: 60vh;
        }
        .section-shadow {
          box-shadow: rgba(14, 30, 37, 0.082) 4px 4px 4px 0px,
            rgba(14, 30, 37, 0.096) 4px 4px 12px 0px;
          /* border-radius: var(--rounded-box, 1rem); */
        }
      `}</style>
    </div>
  );
}

export default HotMealDaySection;
