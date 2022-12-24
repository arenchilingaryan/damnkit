import React, { forwardRef, LegacyRef } from 'react';
import { ButtonProps } from './button-types';

export const Button = forwardRef(function (props: ButtonProps, ref: LegacyRef<HTMLButtonElement>) {
  return (
    <button ref={ref} {...props}>
      {props.children}
    </button>
  );
});

Button.displayName = 'Button';
