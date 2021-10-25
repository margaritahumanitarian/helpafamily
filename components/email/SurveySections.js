import React, { useState } from 'react';
import Question from './Questions';

export default function SurveySection() {
  const [surveyPointer, setSurveyPointer] = useState(0);
  const [input, setInput] = useState('');

  const handleSurveyButton = () => {
    if (surveyPointer == 3) {
      return;
    }
    setSurveyPointer(surveyPointer + 1);
    setInput('');
  };

  return (
    <>
      <Question surveyPointer={surveyPointer}>
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
      </Question>
    </>
  );
}
