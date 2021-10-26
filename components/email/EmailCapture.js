import { BsArrowRight } from 'react-icons/bs';
import EmailCaptureHome from './EmailCaptureHome';
import React from 'react';

export default function EmailCapture({ changePointer, handleSubmit, email }) {
  const handleEmailSubmit = () => {
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
                handleSubmit(value.target.value);
              }}
              placeholder="Enter Your Email"
              value={email}
            />
            <button type="submit">
              <div className="btn btn-accent" onClick={handleEmailSubmit}>
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
