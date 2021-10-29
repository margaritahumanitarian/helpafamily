import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import EmailCaptureHome from './EmailCaptureHome';

export default function EmailCapture({ changePointer, getEmailSubmit }) {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    console.log(email);
    //backend todo
  };

  const handleSubmit = () => {
    getEmailSubmit(email);
    handleEmailSubmit();
    changePointer();
  };

  return (
    <>
      <div className="email-captureBox border-4 text-center hero-content mx-auto my-10">
        <EmailCaptureHome
          data={
            'lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum'
          }
          isEnterEmail={true}
        >
          <div className="input-email">
            <input
              className="mx-5 py-2 border-4 text-black"
              onChange={(value) => {
                setEmail(value.target.value);
              }}
              placeholder="Enter Your Email"
              value={email}
            />
            <button type="submit">
              <div className="btn btn-accent" onClick={handleSubmit}>
                <BsArrowRight className="inline-block w-7 h-10 " />
              </div>
            </button>
          </div>
        </EmailCaptureHome>
      </div>
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
