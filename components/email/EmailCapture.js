import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import EmailCaptureHelper from './EmailCaptureHelper';
import { useContextTheme } from '../ThemeContext';
import { useFormspark } from '@formspark/use-formspark';

export default function EmailCapture({ nextComponent, updateData, formID }) {
  const [email, setEmail] = useState('');

  const [submit, submitting] = useFormspark({
    formId: formID,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await submit({ email });
      updateData({ Email: result.email });
      setEmail('');
      setTimeout(() => nextComponent(), 10);
    } catch (error) {
      console.log(error);
    }
  };

  const { theme } = useContextTheme();
  return (
    <>
      <EmailCaptureHelper
        data={'Please submit your email to get on our email list'}
      >
        <div className="input-email">
          <input
            className="mx-5 py-2 border-2 text-black"
            onChange={(value) => {
              setEmail(value.target.value);
            }}
            placeholder="Enter Your Email"
            value={email}
          />
          <button
            className={`${theme === 'dark' ? 'bg-white' : ''} `}
            disabled={submitting}
            onClick={handleSubmit}
            type="submit"
          >
            <div className="btn btn-accent" disabled={!email}>
              <BsArrowRight className="inline-block w-7 h-10" />
            </div>
          </button>
        </div>
      </EmailCaptureHelper>

      <style jsx>{`
        .input-email {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
