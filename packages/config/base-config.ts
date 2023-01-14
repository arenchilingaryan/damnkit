import { ColorsType, Config, SpaceType, CssMixesType, BreakpointsType } from './types';

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

const breakpoints: BreakpointsType = {
  type: 'min-width',
  sizes: {
    l: 1440,
    m: 1024,
    s: 448,
    xs: 0,
  },
};

const defaultMetricSystem = 'px';

const baseConfig: Config = {
  space,
  colors,
  defaultMetricSystem,
  mixes,
  breakpoints,
};

export default baseConfig;
