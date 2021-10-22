import { useEffect, useState } from 'react';
import EmailCapture from './EmailCapture';
import SurveySection from './SurveySections';
import ThankyouEmail from './ThankyouEmail';

export default function EmailSection() {
  const [componentPointer, setComponentPointer] = useState(0);

  const changePointer = () => {
    setComponentPointer(componentPointer + 1);
  };

  const componentsStack = [
    <EmailCapture changeFunction={changePointer} key={0} />,
    <ThankyouEmail changeFunction={changePointer} key={1} />,
    <SurveySection key={2} />,
  ];

  const [componentBeingRender, setComponentBeingRender] = useState('');

  useEffect(() => {
    setComponentBeingRender(componentsStack[componentPointer]);
  }, [componentPointer]);

  return componentBeingRender;
}
