import React from 'react';

export default function SurveySection({ buttonName }) {
  return (
    <>
      <div className="email-captureBox border-4 text-center hero-content mx-auto my-10">
        <div>
          <div className="email-content-box pb-10 text-center hero-content md:m-auto">
            <div className="description text-lg">
              {
                'Lorem epsum epsum loremLorem epsum epsum lorem-Lorem epsum epsum loremLorem epsum epsum loremLorem epsum epsum lorem'
              }
            </div>
            <div className="enter-email">
              <div className="input-email">
                <input className="mx-5 py-2 border-4 text-black" />
              </div>
              <div>
                <button className="btn btn-accent mt-5" type="submit">
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
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
