import EmailCaptureHome from './EmailCaptureHome';
import React from 'react';

export default function ThankyouEmail({ changePointer }) {
  const handleButtonClick = () => {
    changePointer();
  };
  return (
    <div className="border-4 text-center hero-content mx-auto my-10">
      <EmailCaptureHome
        data={
          'Thank you for putting yourself on our email list! If you have a moment answer these questions to help us better serve you and the community'
        }
        isEnterEmail={false}
      >
        <div>
          <button
            className="btn btn-accent mt-5"
            onClick={handleButtonClick}
            type="submit"
          >
            {'Get Started'}
          </button>
        </div>
      </EmailCaptureHome>
    </div>
  );
}
