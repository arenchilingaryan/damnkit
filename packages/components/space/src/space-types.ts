import React, { ReactNode } from 'react';
import { BreakpointsType, SpaceType } from '../../../config/types';

type SpaceValue = keyof SpaceType | number;

export type ResponsiveSpaceValue = {
  [key in keyof BreakpointsType['sizes']]: SpaceValue;
};

export type SpacePropertyConfig = SpaceValue | ResponsiveSpaceValue;

export type SpaceConfig = {
  top?: SpacePropertyConfig;
  right?: SpacePropertyConfig;
  bottom?: SpacePropertyConfig;
  left?: SpacePropertyConfig;
};

export type FunctionType = (spaceClassName: string) => any;

type SpaceComponentProps = {
  className: string;
  id?: string;
  'data-testid'?: string;
};

export type SpaceMediaVariantType = 'min-width' | 'max-width';
export type SpacingType = 'margin' | 'padding';

export type SpaceProps = SpaceConfig & {
  className?: string;
  children?: ReactNode | FunctionType;
  id?: string;
  testId?: string;
  component?: string | React.ComponentType<SpaceComponentProps>;
  spaceType?: SpacingType;
  mediaVariant?: SpaceMediaVariantType;
};
