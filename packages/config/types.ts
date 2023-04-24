import { Properties } from 'csstype';

type DefaultRandomProperties<T> = { [key: string]: T };

export type Metrics = 'em' | 'px' | '%';

export type SpaceObjectProperty = {
  size: number;
  metricSystem: Metrics;
};

export type BreakpointsTypeSizes = { [key: string]: number };

export type BreakpointsType = {
  type: 'min-width' | 'max-width';
  sizes?: BreakpointsTypeSizes;
};

export type SpaceType = DefaultRandomProperties<SpaceObjectProperty | number>;

export type ColorsType = DefaultRandomProperties<string>;

export type PropertyValue = keyof ColorsType | keyof SpaceType | string;

export type Config<
  C extends ColorsType = ColorsType,
  S extends SpaceType = SpaceType,
  M extends Metrics = Metrics,
  Mixes extends CssMixesType = CssMixesType,
  B extends BreakpointsType = BreakpointsType,
> = {
  colors?: C;
  space?: S;
  defaultMetricSystem?: M;
  mixes?: Mixes;
  breakpoints?: B;
};

export type CssMixesType = DefaultRandomProperties<Properties<PropertyValue>>;
