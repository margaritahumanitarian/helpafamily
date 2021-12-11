import React from 'react';
import { useContextTheme } from '@components/ThemeContext';

export default function Questions({
  inputValue,
  inputOnChangeFunction,
  question,
}) {
  const { textColor } = useContextTheme();
  return (
    <>
      <div className="email-content-box pb-4 text-center hero-content md:m-auto">
        <div className={`font-bold text-2xl ${textColor}`}>{question}</div>
      </div>
      <div className="questions-child">
        <textarea
          className="inputField p-2 text-black"
          onChange={inputOnChangeFunction}
          value={inputValue}
        />
      </div>
      <style jsx>{`
        .questions-child {
          width: 80%;
        }

        .inputField {
          width: 100%;
          border: 1px solid #678587;
          background: rgba(247, 247, 247, 0.7);
        }
      `}</style>
    </>
  );
}
