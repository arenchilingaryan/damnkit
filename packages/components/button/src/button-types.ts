import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import React from 'react';

export type ButtonOptions = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  loadingText?: string;
  type?: 'button' | 'reset' | 'submit';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  spinner?: React.ReactElement;
  spinnerPlacement?: 'start' | 'end';
  mix?: string;
};

export type ButtonProps = PropsWithChildren<ButtonOptions>;
