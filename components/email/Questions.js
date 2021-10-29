import React from 'react';

export default function Questions({ surveyPointer, children, questions }) {
  return (
    <>
      <div className="border-4 text-center hero-content mx-auto my-10 h-72">
        <div>
          <div className="email-content-box pb-10 text-center hero-content md:m-auto">
            <div className="descryption text-lg">
              {questions[surveyPointer]}
            </div>
          </div>
          <div className="questions-child">{children}</div>
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
