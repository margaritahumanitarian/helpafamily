import React from 'react';

export default function ThankyouEmail({ changeFunction }) {
  const handleButtonClick = () => {
    changeFunction();
  };
  return (
    <>
      <div className="email-captureBox border-4 text-center hero-content mx-auto my-10">
        <div>
          <div className="email-content-box text-center hero-content md:m-auto">
            <div className="description text-lg">
              {
                'Thank you for putting yourself on our email list! If you have a moment answer these questions to help us better serve you and the community'
              }
            </div>
            <div>
              <button
                className="btn btn-accent mt-5"
                onClick={handleButtonClick}
                type="submit"
              >
                {'Get Started'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .description {
          margin: 0% 10%;
        }
        .email-content-box {
          display: flex;
          align-items: start;
          flex-wrap: wrap;
        }

        .email-content-box > * {
          flex-basis: 100%;
        }

        .input-email input {
          display: inline-block;
          width: 75%;
          text-align: center;
        }

        @media screen and (max-width: 540px) {
          .email-content-box {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}
