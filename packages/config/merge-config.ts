import { Config } from './types';
import baseTheme from './base-config';

export function mergeConfig(theme: Config) {
  return { ...baseTheme, ...theme };
}
