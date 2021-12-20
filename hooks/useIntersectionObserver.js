import { useEffect, useRef, useState } from 'react';
export function useIntersectionObserver(ref, options = {}) {
  const [element, setElement] = useState(null);
  // const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useRef(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;
    cleanOb();
    const ob = (observer.current = new IntersectionObserver(
      (changes) => {
        changes.forEach((change) => {
          if (window.innerWidth > 768) {
            // setIsIntersecting(change.isIntersecting);
            if (change.isIntersecting) {
              /*
               * 'split' turns our data attribute string into an array, and the spread operator (three dots)
               * deconstructs it into the format that we need for manipulating the element's 'classList'
               */
              change.target.classList.remove(
                ...change.target.getAttribute('data-class-out').split(' ')
              );
              change.target.classList.add(
                ...change.target.getAttribute('data-class-in').split(' ')
              );
            } else {
              change.target.classList.remove(
                ...change.target.getAttribute('data-class-in').split(' ')
              );
              change.target.classList.add(
                ...change.target.getAttribute('data-class-out').split(' ')
              );
            }
          }
        });
      },
      { ...options }
    ));
    ob.observe(element);
    return () => {
      cleanOb();
    };
  }, [element, options]);

  // return { isIntersecting };
}
