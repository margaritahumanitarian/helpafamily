import Image from 'next/image';
import React from 'react';

function HotMealDaySection() {
  return (
    <div className="text-center md:m-auto pb-20 hot-meal-day">
      <div className="w-lg p-5 pb-10 section-shadow">
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="space-y-3 p-5 pr-10 md:text-left">
            <h2 className="text-3xl md:text-5xl md:text-left font-bold">
              {'Hot Meal Day'}
            </h2>
            <p>
              {
                'Buy ingredients for 1 hot meal for 60 hungry people. Sample meals include spaghetti with Texas toast and caesar salad, chicken alfredo, enchilada taquitos. Served as take-home meal boxes at Grace Resources in Lancaster, California.'
              }
            </p>
            <p>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac volutpat diam, vel dignissim turpis. Aenean euismod ipsum a ipsum pellentesque sollicitudin. Phasellus lobortis libero in pellentesque posuere. Nulla est diam, sodales porttitor diam sed, viverra dapibus massa. Proin rhoncus a est nec aliquam. Fusce ultricies purus ultrices mi placerat interdum. Proin dignissim felis a sem iaculis sollicitudin. Donec blandit ex eu arcu consectetur feugiat. Nullam mollis felis in erat mollis finibus sed eu orci. Sed varius gravida posuere. Aliquam eu velit non ante ultrices consectetur.'
              }
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:items-end">
              <p className="md:col-span-2">
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac volutpat diam, vel dignissim turpis.'
                }
              </p>
              <a className="lg:ml-auto" href="/upcoming-events">
                <button
                  className="btn btn-accent rounded-btn mt-5"
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
          box-shadow: rgba(14, 30, 37, 0.1) 0px 0px 4px 0px,
            rgba(14, 30, 37, 0.15) 0px 0px 16px 0px;
          border-radius: var(--rounded-box, 1rem);
        }
      `}</style>
    </div>
  );
}

export default HotMealDaySection;
