import React, { useState } from 'react';
import Image from 'next/image';
import { SVGPlane } from '../SVGBackgrounds';
import { useContextTheme } from '@components/ThemeContext';
import { useFormspark } from '@formspark/use-formspark';

export default function EmailCapture({ nextComponent, updateData, formID }) {
  const [email, setEmail] = useState('');
  const { backgroundColor, textColor } = useContextTheme();
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

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:p-5 relative">
        <Image
          alt={'Hot Meal Day'}
          height="260"
          layout="responsive"
          objectFit="cover"
          src={'/images/keepInTouch.jpeg'}
          width="400"
        />
        <SVGPlane className="absolute plane right-0 lg:right-28 bottom-1/3 lg:bottom-1/2 z-0" />
        <div className="space-y-3 p-14 lg:pr-10 md:text-left z-10">
          <h2 className="text-3xl md:text-5xl md:text-left pb-7 font-bold">
            {'Keep In Touch'}
          </h2>
          <div className="md:pl-5">
            <p className="text-sm">
              {
                'Get on our email list and we’ll keep you up to date with all that is going on with your community that we’re involved in.'
              }
            </p>
            <p className="pt-5">{'Enter Your Email'}</p>
            <form className="lg:flex md:items-end" onSubmit={handleSubmit}>
              <input
                className={`appearance-none border border-gray-300 rounded h-full py-3 mb-2 lg:mb-0 mr-0 lg:mr-4 w-full lg:w-3/5 px-3 ${textColor} ${backgroundColor} leading-tight focus:outline-none focus:shadow-outline`}
                onChange={(value) => {
                  setEmail(value.target.value);
                }}
                // placeholder="Enter Your Email"
                required
                type="email"
                value={email}
              />
              <button
                aria-label="donate-btn"
                className="btn btn-accent rounded-sm mt-5  btn-size"
                disabled={submitting}
                type="submit"
              >
                {'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .btn-size {
          display: flex;
          margin: 0 5px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
          white-space: nowrap;
        }
        .plane {
          z-index: -10;
        }
        @media (min-width: 768px) {
          .section-box {
            max-width: 1280px;
            box-shadow: rgba(14, 30, 37, 0.082) 4px 4px 4px 0px,
              rgba(14, 30, 37, 0.096) 4px 4px 12px 0px;
            /* border-radius: var(--rounded-box, 1rem); */
          }
        }
      `}</style>
    </>
  );
}
