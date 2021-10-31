import React, { useEffect, useState } from 'react';

export default function InteractiveSection({ children }) {
  const [componentPointer, setComponentPointer] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    console.log(componentPointer);
  }, [componentPointer]);

  const updateData = (childData) => {
    setData((prevState) => {
      return { ...prevState, ...childData };
    });
  };

  const nextComponent = () => {
    setComponentPointer(componentPointer + 1);
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

  return <>{childrenWithProps[componentPointer]}</>;
}
