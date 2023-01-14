import { ReactNode } from 'react';
import { BreakpointsType, SpaceType } from "../../../config/types";

type SpaceValue = keyof SpaceType | number;

export type ResponsiveSpaceValue = {
  [key in keyof BreakpointsType]: SpaceValue;
};

export type SpacePropertyConfig = SpaceValue | ResponsiveSpaceValue;

export type SpaceConfig = {
  top?: SpacePropertyConfig;
  right?: SpacePropertyConfig;
  bottom?: SpacePropertyConfig;
  left?: SpacePropertyConfig;
};

export type FunctionType = (spaceClassName: string) => any;

export type SpaceProps = SpaceConfig & {
  className?: string;
  children?: ReactNode | FunctionType;
  id?: string;
  testId?: string;
  Component?: 'div' | 'span';
};

