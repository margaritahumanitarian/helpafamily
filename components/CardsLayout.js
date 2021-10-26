import React from 'react';

export default function CardsLayout({ children, description }) {
  return (
    <div className="text-center hero-content md:m-auto">
      <div className="w-lg">
        <h2 className="pb-20 text-3xl md:text-4xl">{description}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-x-8 gap-y-5 justify-center align-center content-center">
          {children}
        </div>
      </div>
    </div>
  );
}
