import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';
import { RequireComponentProps } from 'types/component-types';

export type ButtonOptions = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  RequireComponentProps & {
    type?: 'button' | 'reset' | 'submit';
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    href?: string;
  };

export type ButtonProps = PropsWithChildren<ButtonOptions> & {
  href?: string;
  target?: '_self' | '_blank';
};
