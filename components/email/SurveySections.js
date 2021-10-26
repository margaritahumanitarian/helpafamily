import React, { useEffect, useState } from 'react';
import Question from './Questions';

export default function SurveySection({ submitData }) {
  const [surveyPointer, setSurveyPointer] = useState(0);
  const [input, setInput] = useState('');
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    if (answers.length === 3) {
      submitData(answers);
    }
  }, [answers]);

  const setAnswersToData = (answer) => {
    console.log('answer is ', answer);
    setAnswers((prev) => {
      return [...prev, answer];
    });
  };

  const handleSurveyButton = () => {
    setSurveyPointer(surveyPointer + 1);
    setAnswersToData(input);
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
