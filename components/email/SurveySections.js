import React, { useState } from 'react';

export default function SurveySection() {
  const surveyContentArray = [
    'How did you hear about us?',
    "What are causes you're interested in?",
    'How might would you like to help out',
    'Thank you! for your response',
  ];

  const [surveyPointer, setSurveyPointer] = useState(0);
  console.log(surveyPointer);
  const [input, setInput] = useState('');

  const handleSurveyButton = () => {
    if (surveyPointer == 3) {
      return;
    }
    setSurveyPointer(surveyPointer + 1);
    console.log(surveyPointer);
    setInput('');
  };

  return (
    <>
      <div className="email-captureBox border-4 text-center hero-content mx-auto my-10">
        <div>
          <div className="email-content-box pb-10 text-center hero-content md:m-auto">
            <div
              className={`description ${
                surveyPointer < 3 ? 'text-lg' : 'text-4xl'
              }`}
            >
              {surveyContentArray[surveyPointer]}
            </div>
            {surveyPointer < 3 ? (
              <div className="enter-email">
                <div className="input-email">
                  <input
                    className="mx-5 py-2 border-4 text-black"
                    onChange={(value) => setInput(value.target.value)}
                    value={input}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-accent mt-5"
                    onClick={handleSurveyButton}
                    type="submit"
                  >
                    {surveyPointer < 2 ? 'Next' : 'Submit'}
                  </button>
                </div>
              </div>
            ) : (
              ''
            )}
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
