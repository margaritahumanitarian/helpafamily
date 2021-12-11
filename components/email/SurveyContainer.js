import React from 'react';
import { useContextTheme } from '@components/ThemeContext';

function SurveyContainer({ children, bg }) {
  const { theme } = useContextTheme();
  return (
    <div className="content-box flex flex-col justify-center items-center py-0 lg:py-20">
      <div className="p-10 text-section flex flex-col justify-center items-center w-full lg:w-1/2">
        {children}
      </div>
      <style jsx>{`
        .content-box {
          background: ${theme === 'dark'
            ? `linear-gradient(
            rgba(0,0,0, 0.5),
            rgba(0,0,0, 0.5)
          ),
          url(${bg})`
            : `linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
          ),
          url(${bg})`};
          background-size: cover;
          background-position: center center;
          min-height: 473px;
        }
        .text-section {
          box-shadow: 4px 4px 15px 0px #00000040;
          background: ${theme === 'dark'
            ? 'rgba(0,0,0, 0.5)'
            : 'rgba(255, 255, 255, 0.5)'};
        }
      `}</style>
    </div>
  );
}

export default SurveyContainer;
