import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';
import { SpaceType } from '../../../config/types';

export type Space = {
  top?: string | keyof SpaceType;
  right?: string | keyof SpaceType;
  bottom?: string | keyof SpaceType;
  left?: string | keyof SpaceType;
};

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
  mixName?: string;
  variant?: string;
  space?: Space;
  margin?: Space;
};

export type ButtonProps = PropsWithChildren<ButtonOptions>;
