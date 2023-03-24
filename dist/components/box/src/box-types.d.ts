import React, { ReactNode } from 'react';
import { BreakpointsType, SpaceType } from 'config/types';
type BoxValue = keyof SpaceType | number;
export type ResponsiveBoxValue = {
    [key in keyof BreakpointsType['sizes']]: BoxValue;
};
export type BoxPropertyConfig = BoxValue | ResponsiveBoxValue;
export type BoxConfig = {
    p?: BoxPropertyConfig[] | number;
    pt?: BoxPropertyConfig | number;
    pr?: BoxPropertyConfig | number;
    pb?: BoxPropertyConfig | number;
    pl?: BoxPropertyConfig | number;
    m?: BoxPropertyConfig[] | number;
    mt?: BoxPropertyConfig | number;
    mr?: BoxPropertyConfig | number;
    mb?: BoxPropertyConfig | number;
    ml?: BoxPropertyConfig | number;
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
    mediaVariant?: BoxMediaVariantType;
};
export {};
