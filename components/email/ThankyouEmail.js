import React from 'react';
import SurveyContainer from './SurveyContainer';
import { useContextTheme } from 'components/ThemeContext';

export default function ThankyouEmail({ nextComponent }) {
  const { theme, textColor } = useContextTheme();

  const handleForwardButtonClick = () => {
    nextComponent(2);
  };

  const handleBackButtonClick = () => {
    nextComponent();
  };

  return (
    <SurveyContainer bg="/images/keepInTouch.jpeg">
      <div className={`text-5xl font-bold ${textColor}`}>{'Thanks you!'}</div>
      <div className="mt-5 w-11/12 lg:w-2/3">
        {
          'You are now on our mailing list. If you have a moment to take a quick survey, it would greatly help us know how we can better serve the community and when to reach out to you.'
        }
      </div>
      <div className="flex mt-5">
        <button
          className="btn btn-accent normal-case rounded-sm btn-size"
          onClick={handleForwardButtonClick}
          type="button"
        >
          {'Take Survey'}
        </button>
        <button
          className={`btn rounded-sm ml-8 hover:bg-gray-600 bg-white text-gray-900 font-normal hover:text-white py-2 px-2 border border-gray-800 hover:border-transparent normal-case btn-size ${
            theme === 'dark' &&
            'text-gray-200 border-gray-600 hover:bg-gray-800 bg-gray-900'
          }`}
          onClick={handleBackButtonClick}
          type="button"
        >
          {'No Thank You'}
        </button>
      </div>
    </SurveyContainer>
  );
}
