import { SVGHotMealDaySectionBackground, SVGQuotes } from './SVGBackgrounds';
import Image from 'next/image';
import React from 'react';
import { useContextTheme } from 'components/ThemeContext';
import useStripeSession from '../hooks/useStripeSession';

function HotMealDaySection() {
  const [handleSubmit, isPending] = useStripeSession();
  const { cardsBackgroundColor, theme } = useContextTheme();

  const actionCost = 10;
  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: 'Hot Meal Day.',
    });
  return (
    <div className="px-0 py-10 md:px-10 md:py-32 hot-meal-day relative overflow-hidden">
      <SVGHotMealDaySectionBackground className="absolute w-full right-0 -top-1/3 z-0" />
      <div
        className={`w-lg p-5 lg:p-5 section-box z-10 ${cardsBackgroundColor}`}
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <div className="m-5">
            <SVGQuotes className="absolute quotes top-0 left-0" />
            <h2 className="text-3xl md:text-5xl md:text-left pb-7 font-bold quote z-10">
              {'Hot Meal Day'}
            </h2>
            <div>
              <p className="w-full">
                {
                  'Buy ingredients for 1 hot meal for 60 hungry people. Sample meals include spaghetti with Texas toast and caesar salad, chicken alfredo, enchilada taquitos. Served as take-home meal boxes at Grace Resources in Lancaster, California.'
                }
              </p>
              <hr className="my-5 w-full border-blue" />
              <div className="flex1 md:items-end ">
                <p className="md:col-span-2  lg:pb-0">
                  {
                    'Make a donation today and you can help us bring hot meals to the most needy in our society.'
                  }
                </p>
                <div className="flex-buttons pt-5">
                  <button
                    aria-label="donate-btn"
                    className="btn btn-accent normal-case rounded-sm mt-5 btn-size"
                    disabled={isPending ? true : false}
                    onClick={handleOnClick}
                    type="button"
                  >
                    {'Donate'}
                  </button>
                  <a
                    className="lg:ml-auto"
                    href="https://www.margaritahumanitarian.org/upcoming-events#h.3f0nxu3620tm"
                  >
                    <button
                      aria-label="learn-more-btn"
                      className={`btn rounded-sm bg-transparent hover:bg-teal-dark text-gray-900 font-normal hover:text-white py-2 px-2 border border-gray-800 hover:border-transparent normal-case btn-size ${
                        theme === 'dark' &&
                        'text-gray-200 border-gray-600 hover:bg-gray-800'
                      }`}
                      type="button"
                    >
                      {'Learn More'}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Image
            alt={'Hot Meal Day'}
            height="260"
            layout="responsive"
            objectFit="cover"
            src={'/images/hotmeals-unsplash.jpeg'}
            width="400"
          />
        </div>
      </div>
      <style jsx>{`
        .btn-size {
          display: flex;
          margin: 0 5px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
          white-space: nowrap;
        }
        .flex1 {
          display: flex;
          flex-direction: column;
        }
        .flex-buttons {
          display: flex;
          justify-content: flex-end;
        }
        .hot-meal-day {
          display: flex;
          justify-content: center;
        }
        .quotes {
          z-index: -1;
        }
        .border-blue {
          --tw-border-opacity: 1;
          border-color: rgba(151, 239, 244, var(--tw-bg-opacity));
        }

        @media (min-width: 768px) {
          .section-box {
            max-width: 1280px;
            box-shadow: 10px 10px 15px 0px #00000040;
            /* border-radius: var(--rounded-box, 1rem); */
          }
        }
      `}</style>
    </div>
  );
}

export default HotMealDaySection;
