import React, { InputHTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';
import { Space } from '../../../types/component-types';

export type InputPropsType = InputHTMLAttributes<HTMLInputElement> & {
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
