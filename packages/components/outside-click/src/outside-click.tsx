import React, { useRef, useEffect } from 'react';
import { OutsideClickProps } from './outside-click-types';

const OutsideClick = ({ children, onOutsideClick }: OutsideClickProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClick;
