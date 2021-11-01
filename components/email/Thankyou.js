import React from 'react';

const Thankyou = () => {
  return (
    <>
      <div className="thankyou-content text-4xl pt-5">
        <h1 className="mb-12">{'ThankYou !!!'}</h1>
      </div>
      <style jsx>{`
        .thankyou-content {
          margin: auto;
          text-align: center;
        }
        .card-shadow {
          box-shadow: rgba(14, 30, 37, 0.061) 6px 6px 12px 0px,
            rgba(14, 30, 37, 0.075) 6px 6px 10px 0px;
        }
      `}</style>
    </>
  );
};

export default Thankyou;
