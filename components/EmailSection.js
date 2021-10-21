import EmailCapture from './EmailCapture';
import SurveySection from '../components/SurveySections';
import { useState } from 'react';

export default function EmailSection() {
  const [componentBeingRender, setComponentBeingRender] = useState(
    <EmailCapture
      changeComponent={() => {
        setComponentBeingRender(<SurveySection buttonName={'Next'} />);
      }}
    />
  );
  return componentBeingRender;
}
