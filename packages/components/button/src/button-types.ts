import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';
import { RequireComponentProps } from 'types/component-types';

export type ButtonOptions = ButtonHTMLAttributes<HTMLButtonElement> &
  RequireComponentProps & {
    type?: 'button' | 'reset' | 'submit';
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
  };

export type ButtonProps = PropsWithChildren<ButtonOptions>;
