// import { CardAction } from './Card';
import Image from 'next/image';
import React from 'react';
import { SVGPlane } from './SVGCardBackground';
import { useContextTheme } from 'components/ThemeContext';
function KeepInTouchSection() {
  const { cardsBackgroundColor } = useContextTheme();
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting');
    setInput('');
  };
  return (
    <div className="flex justify-center items-center py-0 pt-20 lg:py-20">
      <div className={`w-lg lg:p-5 section-box ${cardsBackgroundColor}`}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
          <Image
            alt={'Hot Meal Day'}
            height="260"
            layout="responsive"
            objectFit="cover"
            src={'/images/keepInTouch.jpeg'}
            width="400"
          />
          <SVGPlane className="fixed" />
          <div className="space-y-3 p-14 lg:pr-10 md:text-left">
            <h2 className="text-3xl md:text-5xl md:text-left pb-7 font-bold">
              {'Keep In Touch'}
            </h2>
            <div className="z-10 md:pl-5">
              <p className="text-sm">
                {
                  'Get on our email list and we’ll keep you up to date with all that is going on with your community that we’re involved in.'
                }
              </p>
              <p className="pt-5">{'Enter Your Email'}</p>
              <form className="lg:flex md:items-end" onSubmit={handleSubmit}>
                <input
                  className=" appearance-none border border-gray-300 rounded h-full py-3 mb-2 lg:mb-0 mr-0 lg:mr-4 w-full lg:w-3/5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Email Address"
                  type="email"
                  value={input}
                />
                <button
                  aria-label="donate-btn"
                  className="btn btn-accent rounded-sm mt-5  btn-size"
                  type="submit"
                >
                  {'Submit'}
                </button>
              </form>
            </div>
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
          z-index: -1;
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
    </div>
  );
}

export default KeepInTouchSection;
