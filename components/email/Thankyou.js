import React from 'react';

const Thankyou = () => {
  return (
    <div className="border-4 text-center hero-content mx-auto my-10 h-72">
      <div className="thankyou-content text-4xl pt-5">
        <h1 className="mb-12">{'ThankYou !!!'}</h1>
      </div>
      <style jsx>{`
        .thankyou-content {
          margin: auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Thankyou;
