import React from 'react';
import { useContextTheme } from 'components/ThemeContext';

export default function ThankyouEmail({ nextComponent, previousComponent }) {
  const { theme } = useContextTheme();

  const handleForwardButtonClick = () => {
    nextComponent();
  };

  const handleBackButtonClick = () => {
    previousComponent();
  };

  return (
    <div className="email-content-box flex flex-col justify-center items-center py-28">
      <div className="p-10 text-section flex flex-col justify-center items-center w-full lg:w-1/2">
        <div className="text-5xl font-bold text-gray-700">{'Thanks you!'}</div>
        <div className="mt-5 w-2/3">
          {
            'You are now on our mailing list. If you have a moment to take a quick survey, it would greatly help us know how we can better serve the community and when to reach out to you.'
          }
        </div>
        <div className="flex mt-5">
          <button
            className="btn btn-accent normal-case rounded-sm btn-size"
            onClick={handleBackButtonClick}
            type="button"
          >
            {'Take Survey'}
          </button>
          <button
            className={`btn rounded-sm ml-8 hover:bg-gray-600 bg-white text-gray-900 font-normal hover:text-white py-2 px-2 border border-gray-800 hover:border-transparent normal-case btn-size ${
              theme === 'dark' &&
              'text-gray-200 border-gray-600 hover:bg-gray-800'
            }`}
            onClick={handleForwardButtonClick}
            type="button"
          >
            {'No Thank You'}
          </button>
        </div>
      </div>
      <style jsx>{`
        .email-content-box {
          background: linear-gradient(
              rgba(255, 255, 255, 0.5),
              rgba(255, 255, 255, 0.5)
            ),
            url('/images/keepInTouch.jpeg');
          background-size: cover;
          background-position: center center;
        }
        .text-section {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
