import React, { useState } from 'react';
import Questions from './Questions';
import SurveyContainer from './SurveyContainer';
import { useContextTheme } from '../ThemeContext';
import { useFormspark } from '@formspark/use-formspark';

const questions = [
  'How did you hear about us?',
  'What are some causes you are interested in?',
  'How would you like to help out?',
];
const backgrounds = [
  '/images/surveySection.jpeg',
  '/images/surveySection2.jpeg',
  '/images/surveySection3.jpeg',
];
export default function SurveySection({
  data,
  nextComponent,
  previousComponent,
  formID,
}) {
  const { theme } = useContextTheme();

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
    if (surveyPointer < questions.length - 1) {
      setSurveyPointer(surveyPointer + 1);
    }
    SubmitCheck();
  };

  const handleBackButtonClick = () => {
    if (surveyPointer == 0) {
      previousComponent();
    }

    setSurveyPointer(surveyPointer - 1);
  };

  return (
    <SurveyContainer bg={backgrounds[surveyPointer]}>
      <Questions
        inputOnChangeFunction={setAnswersToData}
        inputValue={answers[surveyPointer]}
        question={questions[surveyPointer]}
      />
      <div className="mt-4">
        {surveyPointer > 0 && (
          <button
            className={`btn rounded-sm hover:bg-gray-600 bg-white text-gray-900 font-normal hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent normal-case btn-size ${
              theme === 'dark' &&
              'text-gray-200 border-gray-600 hover:bg-gray-800'
            }`}
            onClick={handleBackButtonClick}
            type="submit"
          >
            {'<'}
          </button>
        )}
        <button
          className="btn btn-accent ml-4 normal-case rounded-sm btn-size"
          disabled={submitting}
          onClick={handleSurveyButton}
          type="button"
        >
          {surveyPointer < questions.length - 1 ? 'Next Question' : 'Submit'}
        </button>
      </div>
    </SurveyContainer>
  );
}
