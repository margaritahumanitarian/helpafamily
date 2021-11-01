import React from 'react';

export default function Questions({
  inputValue,
  inputOnChangeFunction,
  question,
}) {
  return (
    <>
      <div className="email-content-box pb-10 text-center hero-content md:m-auto">
        <div className="descryption text-2xl">{question}</div>
      </div>
      <div className="questions-child">
        <input
          className="inputField py-2 border-2 text-black"
          onChange={inputOnChangeFunction}
          value={inputValue}
        />
      </div>
      <style jsx>{`
        .description {
          margin: 3% 10%;
        }

        .questions-child {
          width: 80%;
        }

        .inputField {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
}
