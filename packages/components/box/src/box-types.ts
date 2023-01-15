import React, { ReactNode } from 'react';
import { BreakpointsType, SpaceType } from '../../../config/types';

type BoxValue = keyof SpaceType | number;

export type ResponsiveBoxValue = {
  [key in keyof BreakpointsType['sizes']]: BoxValue;
};

export type BoxPropertyConfig = BoxValue | ResponsiveBoxValue;

export type BoxConfig = {
  top?: BoxPropertyConfig;
  right?: BoxPropertyConfig;
  bottom?: BoxPropertyConfig;
  left?: BoxPropertyConfig;
};

export type FunctionType = (boxClassName: string) => any;

type BoxComponentProps = {
  className: string;
  id?: string;
  'data-testid'?: string;
};

export type BoxMediaVariantType = 'min-width' | 'max-width';
export type SpacingType = 'margin' | 'padding';

export type BoxProps = BoxConfig & {
  className?: string;
  children?: ReactNode | FunctionType;
  id?: string;
  testId?: string;
  component?: string | React.ComponentType<BoxComponentProps>;
  boxType?: SpacingType;
  mediaVariant?: BoxMediaVariantType;
};
