import { Config } from './types';
import baseTheme from './base-theme';

export function mergeTheme(theme: Config) {
  return { ...baseTheme, ...theme };
}
