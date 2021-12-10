import React from 'react';

export default function ThankyouEmail({ nextComponent, previousComponent }) {
  const handleForwardButtonClick = () => {
    nextComponent();
  };

  const handleBackButtonClick = () => {
    previousComponent();
  };

  return (
    <div className="email-content-box flex flex-col justify-center item-center">
      <div className=" pb-10 text-center w-full lg:w-1/2 bg-white mx-auto">
        <div className="text-3xl">{'Thanks you!'}</div>
        <div className="">
          {
            'You are now on our mailing list. If you have a moment to take a quick survey, it would greatly help us know how we can better serve the community and when to reach out to you.'
          }
        </div>
        <div className="flex">
          <button
            className="btn  mt-5"
            onClick={handleBackButtonClick}
            type="button"
          >
            {'Take Survey'}
          </button>
          <button
            className="btn btn-accent mt-5"
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
          height: 402px;
          background-size: cover;
          background-position: center center;
        }
      `}</style>
    </div>
  );
}
