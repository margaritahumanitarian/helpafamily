import { BsArrowRight } from 'react-icons/bs';
import React from 'react';

export default function EmailCapture({ changeFunction }) {
  const handleEmailSubmit = () => {
    changeFunction();
  };
  return (
    <>
      <div className="email-captureBox border-4 text-center hero-content mx-auto my-10">
        <div>
          <div className="email-title text-4xl pt-5">
            <h1 className="mb-12">{'Keep In Touch'}</h1>
          </div>
          <div className="email-content-box pb-10 text-center hero-content md:m-auto">
            <div className="description text-lg">
              {
                'Lorem epsum epsum loremLorem epsum epsum lorem-Lorem epsum epsum loremLorem epsum epsum loremLorem epsum epsum lorem'
              }
            </div>
            <div className="enter-email">
              <div className="text-lg pb-5">{`Enter your Email`}</div>
              <div className="input-email">
                <input
                  className="mx-5 py-2 border-4 text-black"
                  placeholder="Enter Your Email"
                />
                <button type="submit">
                  <div className="btn btn-accent" onClick={handleEmailSubmit}>
                    <BsArrowRight className="inline-block w-7 h-10 " />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .email-captureBox {
        }
        .email-title {
          margin: auto;
          text-align: center;
        }

        .email-content-box {
          display: flex;
          align-items: start;
        }

        .email-content-box > * {
          flex-basis: 100%;
        }

        .input-email {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media screen and (max-width: 700px) {
          .email-content-box {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}
