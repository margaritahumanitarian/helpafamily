import React, { useState } from 'react';
import Questions from './Questions';
import { useFormspark } from '@formspark/use-formspark';

export default function SurveySection({
  data,
  nextComponent,
  previousComponent,
  formID,
}) {
  const questions = [
    'How did you hear about us?',
    "What are causes you're interested in?",
    'How might would you like to help out',
  ];

  let Answers = new Array(questions.length).fill('');
  const [submit, submitting] = useFormspark({
    formId: formID,
  });
  const [surveyPointer, setSurveyPointer] = useState(0);
  const [answers, setAnswers] = useState(Answers);
  const Email = data.Email;
  const submitData = async () => {
    const completeData = { Email, questions, answers };
    await submit({ completeData });
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

  const setAnswersToData = (e) => {
    const answer = e.target.value;
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
      <Questions
        inputOnChangeFunction={setAnswersToData}
        inputValue={answers[surveyPointer]}
        question={questions[surveyPointer]}
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
          disabled={submitting}
          onClick={handleSurveyButton}
          type="submit"
        >
          {surveyPointer < questions.length - 1 ? 'Next' : 'Submit'}
        </button>
      </div>
      <style jsx>
        {`
          .main-container {
            display: flex;
            flex-direction: column;
          }
          .buttons {
            display: flex;
            justify-content: space-around;
            width: 80%;
            width: 100%;
          }

          .card-shadow {
            box-shadow: rgba(14, 30, 37, 0.061) 6px 6px 12px 0px,
              rgba(14, 30, 37, 0.075) 6px 6px 10px 0px;
          }
        `}
      </style>
    </>
  );
}
