import EmailCapture from './EmailCapture';
import SurveySection from './SurveySections';
import ThankyouEmail from './ThankyouEmail';
import { useState } from 'react';

export default function EmailSection() {
  const [componentPointer, setComponentPointer] = useState(0);
  const [data, setData] = useState({});

  const getEmailSubmit = (email) => {
    setData((prevState) => {
      return { ...prevState, Email: email };
    });
  };

  const changePointer = () => {
    setComponentPointer(componentPointer + 1);
  };

  return (
    <>
      {componentPointer === 0 && (
        <EmailCapture
          changePointer={changePointer}
          getEmailSubmit={getEmailSubmit}
        />
      )}
      {componentPointer === 1 && (
        <ThankyouEmail changePointer={changePointer} />
      )}
      {componentPointer === 2 && <SurveySection email={data.Email} />}
    </>
  );
}
