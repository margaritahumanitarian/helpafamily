import React from 'react';

export default function EmailCapture() {
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
              <input placeholder="Enter Your Email" />
              <button type="submit">{'>'}</button>
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

        @media screen and (max-width: 540px) {
          .email-content-box {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </>
  );
}
