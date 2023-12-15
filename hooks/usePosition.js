import { useCallback, useEffect, useState } from 'react';

export function usePosition(ref) {
  const [prevElement, setPrevElement] = useState(null);
  const [nextElement, setNextElement] = useState(null);

  useEffect(() => {
    const containerElement = ref.current;

    const handleScroll = () => {
      const rect = containerElement.getBoundingClientRect();
      const visibleElements = Array.from(containerElement.children).filter((child) => {
        const childRect = child.getBoundingClientRect();
        return rect.left <= childRect.left && rect.right >= childRect.right;
      });

      if (visibleElements.length > 0) {
        setPrevElement(getSiblingElement(visibleElements, 'previousElementSibling'));
        setNextElement(getSiblingElement(visibleElements, 'nextElementSibling'));
      }
    };

    handleScroll();
    containerElement.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      containerElement.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [ref]);

  const scrollToElement = useCallback(
    (element) => {
      const currentNode = ref.current;

      if (!currentNode || !element) return;

      const newScrollPosition =
        element.offsetLeft +
        element.getBoundingClientRect().width / 2 -
        currentNode.getBoundingClientRect().width / 2;

      currentNode.scroll({
        left: newScrollPosition,
        behavior: 'smooth',
      });
    },
    [ref]
  );

  const getSiblingElement = (list, property) => {
    const sibling = list.length > 0 ? list[0][property] : null;
    return sibling instanceof HTMLElement ? sibling : null;
  };

  const scroll = useCallback(
    (direction) => {
      const targetElement = direction === 'right' ? nextElement : prevElement;
      scrollToElement(targetElement);
    },
    [scrollToElement, nextElement, prevElement]
  );

  return {
    hasItemsOnLeft: prevElement !== null,
    hasItemsOnRight: nextElement !== null,
    scrollLeft: () => scroll('left'),
    scrollRight: () => scroll('right'),
  };
}
