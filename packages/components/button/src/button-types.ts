import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';
import { SpaceType } from '../../../config/types';
import { CSSProperties } from 'styled-components';

export type Space = {
  top?: string | keyof SpaceType;
  right?: string | keyof SpaceType;
  bottom?: string | keyof SpaceType;
  left?: string | keyof SpaceType;
};

export type ButtonOptions = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  disabled?: boolean;
  disableStyles?: string | CSSProperties;
  type?: 'button' | 'reset' | 'submit';
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  spinner?: React.ReactElement;
  mixName?: string;
  variant?: string;
  padding?: Space;
  margin?: Space;
};

export type ButtonProps = PropsWithChildren<ButtonOptions>;
