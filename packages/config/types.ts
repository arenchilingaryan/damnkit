import { Properties } from 'csstype';

type DefaultRandomProperties<T> = { [key: string]: T };

type Metrics = 'em' | 'px' | '%';

type SpaceObjectProperty = {
  size: number;
  metricSystem: Metrics;
};

export type SpaceType = DefaultRandomProperties<SpaceObjectProperty | number>;

export type ColorsType = DefaultRandomProperties<string>;

export type Config = {
  colors?: ColorsType;
  space?: SpaceType;
  defaultMetricSystem?: Metrics;
  mixes?: CssMixesType;
};

export type CssMixesType = DefaultRandomProperties<Properties<keyof ColorsType | string>>;
