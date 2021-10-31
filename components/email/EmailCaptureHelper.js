import React from 'react';

export default function EmailCaptureHome({ children, data }) {
  return (
    <div>
      <div className="email-title text-4xl pt-5">
        <h1 className="mb-12">{'Keep In Touch'}</h1>
      </div>

      <div className="email-content-box pb-10 text-center hero-content md:m-auto">
        <div className="description text-lg">{data}</div>

        <div className="enter-email">
          <div className="text-lg pb-5">{`Enter your Email`}</div>
          {children}
        </div>
      </div>

      <style jsx>{`
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

        @media screen and (max-width: 700px) {
          .email-content-box {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}
