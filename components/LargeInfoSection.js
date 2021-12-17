/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react';
import { useContextTheme } from './ThemeContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import useStripeSession from '../hooks/useStripeSession';
function LargeInfoSection({ isLeftLayout }) {
  const ref = useRef(null);
  const [handleSubmit, isPending] = useStripeSession();
  const { cardsBackgroundColor, theme } = useContextTheme();

  const { isIntersecting } = useIntersectionObserver(ref, {
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
      className={`py-10 lg:p-20  mb-10 h-full flex flex-col lg:flex-row items-center w-full relative ${cardsBackgroundColor}`}
      ref={ref}
    >
      <img
        alt="large-info-section"
        className={`w-full lg:w-4/5 ${cardsBackgroundColor} ${
          isLeftLayout ? 'mr-auto' : 'ml-auto'
        }`}
        src="/images/large-info-section.png"
      />
      <div
        className={`transition transform duration-700 opacity-0 shadow-lg translate-x-32 relative md:absolute flex flex-col w-full lg:w-5/12 h-11/12 py-12 lg:bg-gradient-to-r items-left from-transparent ${
          theme === 'dark' ? 'via-[#1A2525]' : 'via-gray-50'
        } z-10 ${
          isLeftLayout
            ? `p-4 lg:pl-28 lg:pr-8 lg:right-20 from-transparent  ${
                theme === 'dark' ? 'to-[#1A2525]' : 'to-gray-50'
              }  lg:text-right lg:items-end`
            : `pl-0 lg:pl-8 pr-0 lg:pr-28 lg:left-20 ${
                theme === 'dark' ? 'from-[#1A2525]' : 'from-gray-50'
              } to-transparent lg:text-left lg:items-start`
        } ${
          isIntersecting
            ? 'translate-x-0 opacity-100'
            : `${isLeftLayout ? '-translate-x-32' : 'translate-x-32'} opacity-0`
        }`}
        // data-class-in="translate-x-0 opacity-100"
        // data-class-out="-translate-x-32 opacity-0"
      >
        <p className="font-bold text-3xl">{'Laptops for Families'}</p>
        <hr
          className={`h-1 bg-gradient-to-r border-none rounded-md w-full my-1 ${
            isLeftLayout
              ? 'from-transparent to-teal-medium'
              : 'from-teal-medium to-transparent'
          }`}
        />
        <p className="font-semibold leading-7 text-sm w-full lg:w-10/12">
          {
            'We work with many families. We work with many families. We work with many families. We work with many families. We work with many families. We work with many families. We work with many families. We...'
          }
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
            href="https://www.margaritahumanitarian.org/upcoming-events#h.3f0nxu3620tm"
          >
            <button
              aria-label="learn-more-btn"
              className={`btn rounded-sm font-normal hover:text-white py-2 px-2 border normal-case btn-size bg-yellow-700 hover:bg-yellow-800 ${
                theme === 'dark'
                  ? 'text-gray-200 border-gray-600'
                  : 'border-none text-gray-50'
              }`}
              type="button"
            >
              {'Learn More'}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LargeInfoSection;
