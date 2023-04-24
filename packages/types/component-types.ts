import { ColorsType, SpaceType } from 'config/types';
import { CSSProperties } from 'styled-components';
import React from 'react';

export type Space = {
  top?: string | keyof SpaceType;
  right?: string | keyof SpaceType;
  bottom?: string | keyof SpaceType;
  left?: string | keyof SpaceType;
};

export type RequireComponentProps = {
  mixName?: keyof SpaceType;
  variant?: keyof ColorsType;
  padding?: Space;
  margin?: Space;
  isLoading?: boolean;
  disabled?: boolean;
  disableStyles?: string | CSSProperties;
  spinner?: React.ReactElement;
  style?: CSSProperties;
};

export type TagNames = 'input' | 'button';
