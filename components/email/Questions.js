import React from 'react';

export default function Question({ surveyPointer, children }) {
  const Questions = [
    'How did you hear about us?',
    "What are causes you're interested in?",
    'How might would you like to help out',
    'Thank you! for your response',
  ];

  return (
    <>
      <div className="border-4 text-center hero-content mx-auto my-10">
        <div>
          <div className="email-content-box pb-10 text-center hero-content md:m-auto">
            <div
              className={`descryption ${
                surveyPointer >= 3 ? 'text-4xl' : 'text-lg'
              }`}
            >
              {Questions[surveyPointer]}
            </div>
          </div>
          {children}
        </div>
      </div>
      <style jsx>{`
        .description {
          margin: 3% 10%;
        }
        .email-content-box {
          display: flex;
          align-items: start;
          flex-wrap: wrap;
        }

        .email-content-box > * {
          flex-basis: 100%;
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
