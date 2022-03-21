/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import { useContextTheme } from './ThemeContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import useStripeSession from '../hooks/useStripeSession';

function LargeInfoSection({ mirrored, children }) {
  const infoBoxRef = useRef(null);
  const hrRef = useRef(null);
  const [handleSubmit, isPending] = useStripeSession();
  const { cardsBackgroundColor, theme } = useContextTheme();

  useIntersectionObserver(infoBoxRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  useIntersectionObserver(hrRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });

  const actionCost = 10;
  const handleOnClick = () =>
    handleSubmit({
      amount: actionCost,
      cause: 'Hot Meal Day.',
    });
  return (
    <div
      className={`py-10 px-0 lg:p-20 mb-10 h-full flex flex-col lg:flex-row items-center w-full relative ${cardsBackgroundColor} shadow-md`}
    >
      <img
        alt="large-info-section"
        className={`w-full lg:w-4/5 ${cardsBackgroundColor} ${
          mirrored ? 'ml-auto' : 'mr-auto'
        }`}
        src="/images/laptops-unsplash.png"
      />
      <div
        className={`flex justify-between items-center h-full w-full relative overflow-hidden lg:absolute right-0`}
      >
        <div
          className={`info-box group ${mirrored && 'box-mirrored'}`}
          data-class-in="translate-x-0 opacity-100"
          data-class-out={`${
            mirrored ? '-translate-x-64' : 'translate-x-64'
          } opacity-0 hidden`}
          ref={infoBoxRef}
        >
          <p className="font-bold text-3xl">{'Laptops for Families'}</p>
          <hr
            className="h-1 transition-width duration-700 bg-teal-light border-none rounded-md my-1"
            data-class-in="w-full"
            data-class-out="w-0"
            ref={hrRef}
          />
          <p className="font-semibold leading-7 text-sm w-full lg:w-10/12">
            {children}
          </p>
          <div className="">
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
              className="ml-4"
              href="https://www.margaritahumanitarian.org/low-income-aid/electronics-for-families"
            >
              <button
                aria-label="learn-more-btn"
                className={`btn rounded-sm font-normal hover:text-white py-2 px-2 normal-case btn-size bg-yellow-700 hover:bg-yellow-800 ${
                  theme === 'dark' ? 'text-gray-200 ' : 'text-gray-50'
                }`}
                type="button"
              >
                {'Learn More'}
              </button>
            </a>
          </div>
        </div>
        <div
          className={`h-full z-10 w-28 hidden lg:block absolute right-0 ${cardsBackgroundColor} ${
            mirrored && 'left-0'
          }`}
        />
      </div>
      <style jsx>{`
        .hr-box {
          transition: all 700ms;
        }
        .info-box {
          transition: all 500ms;
          position: absolute;
          background: linear-gradient(
            270deg,
            #1a2525 38.57%,
            rgba(196, 196, 196, 0) 96.51%
          );
          width: 41%;
          padding: 40px;
          z-index: 5;
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          right: 10%;
          color: white;
        }

        .box-mirrored {
          background: linear-gradient(
            90deg,
            #1a2525 38.57%,
            rgba(196, 196, 196, 0) 96.51%
          );
          align-items: flex-start;
          text-align: left;
          left: 10%;
        }
        @media (max-width: 768px) {
          .info-box {
            position: relative;
            background: rgb(31, 41, 55);
            width: 100%;
            align-items: flex-start;
            text-align: left;
            opacity: 1;
            right: 0%;
            padding: 20px 25px;
          }

          .box-mirrored {
            left: 0%;
            align-items: flex-start;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}

export default LargeInfoSection;
