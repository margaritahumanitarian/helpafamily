import React from 'react';
import { useContextTheme } from '../ThemeContext';

export default function ThankyouEmail({ nextComponent, previousComponent }) {
  const { cardsBackgroundColor } = useContextTheme();
  const handleForwardButtonClick = () => {
    nextComponent();
  };

  const handleBackButtonClick = () => {
    previousComponent();
  };

  return (
    <div
      className={`text-center hero-content mx-auto my-10 h-72 flex flex-col card-shadow ${cardsBackgroundColor}`}
    >
      <div className="email-content-box pb-10 text-center hero-content md:m-auto">
        <div className="text-3xl">
          {
            'Thank you for putting yourself on our email list! If you have a moment answer these questions to help us better serve you and the community'
          }
        </div>
      </div>
      <div className="buttons">
        <button
          className="btn btn-accent mt-5"
          onClick={handleBackButtonClick}
          type="submit"
        >
          {'Go Back'}
        </button>
        <button
          className="btn btn-accent mt-5"
          onClick={handleForwardButtonClick}
          type="submit"
        >
          {'Get Started'}
        </button>
      </div>
      <style jsx>{`
        .buttons {
          display: flex;
          justify-content: space-around;
          width: 80%;
        }
      `}</style>
    </div>
  );
}
