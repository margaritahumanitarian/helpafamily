import EmailCapture from './EmailCapture';
import SurveySection from './SurveySections';
import ThankyouEmail from './ThankyouEmail';
import { useState } from 'react';

export default function EmailSection() {
  const [componentPointer, setComponentPointer] = useState(0);
  const [email, setEmail] = useState('');

  const handleSubmit = (email) => {
    setEmail(email);
  };

  const changePointer = () => {
    setComponentPointer(componentPointer + 1);
  };

  const submit = (answers) => {
    console.log(answers);
    console.log(email);
    //add backend
  };

  return (
    <>
      {componentPointer === 0 && (
        <EmailCapture
          changePointer={changePointer}
          email={email}
          handleSubmit={handleSubmit}
          setEmailProp={setEmail}
        />
      )}
      {componentPointer === 1 && (
        <ThankyouEmail changePointer={changePointer} />
      )}
      {componentPointer === 2 && <SurveySection submitData={submit} />}
    </>
  );
}
