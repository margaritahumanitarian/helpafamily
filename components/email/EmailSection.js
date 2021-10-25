import EmailCapture from './EmailCapture';
import SurveySection from './SurveySections';
import ThankyouEmail from './ThankyouEmail';
import { useState } from 'react';

export default function EmailSection() {
  const [componentPointer, setComponentPointer] = useState(0);
  const [email, setEmail] = useState('');
  let dataSet = {};
  const handleSubmit = (email) => {
    setEmail(email);
    dataSet.email = email;
  };

  const changePointer = () => {
    setComponentPointer(componentPointer + 1);
  };

  console.log(dataSet);

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
      {componentPointer === 2 && <SurveySection />}
    </>
  );
}
