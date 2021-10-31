import React, { useState } from 'react';
import Questions from './Questions';

export default function SurveySection({
  data,
  nextComponent,
  previousComponent,
}) {
  const questions = [
    'How did you hear about us?',
    "What are causes you're interested in?",
    'How might would you like to help out',
  ];

  let Answers = new Array(questions.length).fill('');

  const [surveyPointer, setSurveyPointer] = useState(0);
  const [answers, setAnswers] = useState(Answers);

  const submitData = () => {
    console.log(answers, 'with email as', data.Email);
    //backend todo
  };

  const SubmitCheck = () => {
    if (
      answers[questions.length - 1] != '' &&
      surveyPointer === questions.length - 1
    ) {
      submitData();
      nextComponent();
    }
  };

  const setAnswersToData = (answer) => {
    let ans = answers.slice();
    ans[surveyPointer] = answer;
    setAnswers(ans);
  };

  const handleSurveyButton = () => {
    setSurveyPointer(surveyPointer + 1);
    SubmitCheck();
  };

  const handleBackButtonClick = () => {
    if (surveyPointer == 0) {
      previousComponent();
    }

    setSurveyPointer(surveyPointer - 1);
  };

  return (
    <>
      <Questions questions={questions} surveyPointer={surveyPointer}>
        <div className="input-email">
          <input
            className="mx-5 py-2 border-4 text-black"
            onChange={(value) => setAnswersToData(value.target.value)}
            value={answers[surveyPointer]}
          />
        </div>
        <div>
          <button
            className="btn btn-accent mt-5"
            onClick={handleBackButtonClick}
            type="submit"
          >
            {'Back'}
          </button>
          <button
            className="btn btn-accent mt-5"
            disabled={!answers[surveyPointer]}
            onClick={handleSurveyButton}
            type="submit"
          >
            {surveyPointer < questions.length - 1 ? 'Next' : 'Submit'}
          </button>
        </div>
      </Questions>
    </>
  );
}
