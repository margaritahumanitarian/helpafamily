import React, { useState } from 'react';
import { useContextTheme } from '../ThemeContext';

export default function InteractiveSection({ children }) {
  const [componentPointer, setComponentPointer] = useState(0);
  const [data, setData] = useState({});
  const { cardsBackgroundColor } = useContextTheme();

  const updateData = (childData) => {
    setData((prevState) => {
      return { ...prevState, ...childData };
    });
  };

  const nextComponent = () => {
    setComponentPointer((componentPointer) => componentPointer + 1);
  };

  const previousComponent = () => {
    setComponentPointer(componentPointer - 1);
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(
      child,
      {
        data: data,

        updateData: (childData) => {
          updateData(childData);
        },
        nextComponent: () => {
          nextComponent();
        },
        previousComponent: () => {
          previousComponent();
        },
      },
      null
    );
  });

  return (
    <>
      <div
        className={`text-center hero-content mx-auto my-10 h-72 ${cardsBackgroundColor} main-container card-shadow`}
      >
        {childrenWithProps[componentPointer]}
      </div>
      <style jsx>
        {`
          .main-container {
            display: flex;
            flex-direction: column;
          }
          .card-shadow {
            box-shadow: rgba(14, 30, 37, 0.061) 6px 6px 12px 0px,
              rgba(14, 30, 37, 0.075) 6px 6px 10px 0px;
          }
        `}
      </style>
    </>
  );
}
