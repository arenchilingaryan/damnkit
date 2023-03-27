import { ColorsType } from 'config/types';

export function getColorVariant(name?: string, colors?: ColorsType) {
  return colors ? (name && colors[name]) || '' : '';
}
