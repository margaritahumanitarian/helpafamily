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
    <Questions
      disabledCondition={!answers[surveyPointer]}
      handleBackButtonClick={handleBackButtonClick}
      handleSurveyButton={handleSurveyButton}
      inputOnChangeFunction={(value) => setAnswersToData(value.target.value)}
      inputValue={answers[surveyPointer]}
      nextButtonName={surveyPointer < questions.length - 1 ? 'Next' : 'Submit'}
      question={questions[surveyPointer]}
    />
  );
}
