import { ColorsType, Config, SpaceType, CssMixesType } from './types';

const colors: ColorsType = {
  primary: '#366ad5',
  white: '#ffffff',
  secondary: '#199',
};

const space: SpaceType = {
  l: 24,
  m: {
    size: 2,
    metricSystem: 'em',
  },
};

const mixes: CssMixesType = {
  primary: {
    color: 'white',
    backgroundColor: 'primary',
  },
  secondary: {
    color: 'white',
    backgroundColor: '',
  },
};

const defaultMetricSystem = 'px';

const baseConfig: Config = {
  space,
  colors,
  defaultMetricSystem,
  mixes,
};

export default baseConfig;
