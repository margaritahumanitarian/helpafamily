import React from 'react';
import SurveyContainer from './SurveyContainer';
import { useContextTheme } from '@components/ThemeContext';

const Thankyou = () => {
  const { textColor } = useContextTheme();
  return (
    <SurveyContainer bg="/images/keepInTouch.jpeg">
      <div
        className={`text-4xl ${textColor} text-center font-bold px-2 lg:px-16 py-5`}
      >
        {'Thank you for submitting your survey!'}
      </div>
    </SurveyContainer>
  );
};

export const ThankyouAgain = () => {
  const { textColor } = useContextTheme();
  return (
    <SurveyContainer bg="/images/keepInTouch.jpeg">
      <div
        className={`text-4xl ${textColor} text-center font-bold px-2 lg:px-16 py-5`}
      >
        {'Thank you Again!'}
      </div>
    </SurveyContainer>
  );
};
export default Thankyou;
