import { ColorsType, Config, SpaceType } from './types';

const colors: ColorsType = {
  primary: '#366ad5',
  white: '#ffffff',
};

const space: SpaceType = {
  l: 24,
};

const defaultMetricSystem = 'px';

const baseConfig: Config = {
  space,
  colors,
  defaultMetricSystem,
};

export default baseConfig;
