import EmailCaptureHome from './EmailCaptureHome';
import React from 'react';

export default function ThankyouEmail({ nextComponent, previousComponent }) {
  const handleForwardButtonClick = () => {
    nextComponent();
  };

  const handleBackButtonClick = () => {
    previousComponent();
  };

  return (
    <div className="border-4 text-center hero-content mx-auto my-10 h-72">
      <EmailCaptureHome
        data={
          'Thank you for putting yourself on our email list! If you have a moment answer these questions to help us better serve you and the community'
        }
        isEnterEmail={false}
      >
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
      </EmailCaptureHome>
    </div>
  );
}
