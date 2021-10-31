import React from 'react';
import { useContextTheme } from '../ThemeContext';
export default function Questions({
  disabledCondition,
  inputValue,
  inputOnChangeFunction,
  handleBackButtonClick,
  handleSurveyButton,
  nextButtonName,
  question,
}) {
  const { cardsBackgroundColor } = useContextTheme();
  return (
    <>
      <div
        className={`text-center hero-content mx-auto my-10 h-72 ${cardsBackgroundColor} main-container card-shadow`}
      >
        <div className="email-content-box pb-10 text-center hero-content md:m-auto">
          <div className="descryption text-2xl">{question}</div>
        </div>
        <div className="questions-child">
          <input
            className="inputField py-2 border-2 text-black"
            onChange={inputOnChangeFunction}
            value={inputValue}
          />

          <div className="buttons">
            <button
              className="btn btn-accent mt-5"
              onClick={handleBackButtonClick}
              type="submit"
            >
              {'Back'}
            </button>
            <button
              className={`btn btn-accent mt-5`}
              disabled={disabledCondition}
              onClick={handleSurveyButton}
              type="submit"
            >
              {nextButtonName}
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .buttons {
          display: flex;
          justify-content: space-around;
          width: 80%;
          width: 100%;
        }

        .main-container {
          display: flex;
          flex-direction: column;
        }
        .description {
          margin: 3% 10%;
        }

        .questions-child {
          width: 80%;
        }

        .inputField {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
}
