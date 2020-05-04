import React, { useRef, useState, useLayoutEffect } from 'react';

import { ReactComponent as ArrowComponent } from '../../assets/arrow.svg';

const Scrollable = ({
  children,
  hideScrollBar = false,
  hideScrollArrows = false,
  Arrow = ArrowComponent,
}) => {
  const scrollableRef = useRef(null);
  let scrollWidth;

  const [currentChildPosition, setcurrentChildPosition] = useState(0);
  const [lastItemInView, setlastItemInView] = useState(false);
  const [scrollableContainer, setScrollableContainer] = useState(
    scrollableRef?.current,
  );
  useLayoutEffect(() => {
    setScrollableContainer(scrollableRef.current);
  }, []);

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.intersectionRatio === 1) {
        return setlastItemInView(true);
      }
      return setlastItemInView(false);
    },
    {
      root: scrollableContainer,
      rootMargin: '0px',
      threshold: 1,
    },
  );

  if (scrollableContainer?.scrollWidth) {
    if (scrollableContainer.children.length > 0) {
      observer.observe(scrollableContainer.lastChild);
      scrollWidth = scrollableContainer.children[0].scrollWidth;
    }
  }
  const handleArrowClick = (direction) => {
    if (direction === 'forward') {
      if (lastItemInView) {
        return;
      }
      if (currentChildPosition < scrollableContainer?.children.length - 1) {
        const newPosition = currentChildPosition + 1;
        setcurrentChildPosition(newPosition);
        return scrollableContainer.scrollTo(newPosition * scrollWidth, 0);
      }
    }

    if (direction === 'backward') {
      if (currentChildPosition > 0) {
        const newPosition = currentChildPosition - 1;
        setcurrentChildPosition(newPosition);
        return scrollableContainer.scrollTo(newPosition * scrollWidth, 0);
      }
    }
  };
  return (
    <div className='relative'>
      <div className={`scrollable-buttons ${hideScrollArrows ? 'd-none' : ''}`}>
        <Arrow
          className={`left--arrow ${
            currentChildPosition === 0 ? 'fade-2' : ''
          }`}
          onClick={() => handleArrowClick('backward')}></Arrow>
        <Arrow
          className={`right--arrow ${
            currentChildPosition === scrollableContainer?.children.length - 1 ||
            lastItemInView
              ? 'fade-2'
              : ''
          }`}
          onClick={() => handleArrowClick('forward')}></Arrow>
      </div>
      <div
        className={`scrollable ${hideScrollBar ? 'hideScrollBar' : ''}`}
        ref={scrollableRef}>
        {children}
      </div>
    </div>
  );
};

export default Scrollable;
