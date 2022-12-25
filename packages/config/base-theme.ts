import { Config } from './types';

const colors = {
  primary: '#000',
  secondary: '#fff',
  thirdly: '#999',
};

const sizes = {
  l: '24',
};

const baseTheme: Config = {
  ...sizes,
  ...colors,
};

export default baseTheme;
