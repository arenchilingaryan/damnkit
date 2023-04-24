import { ColorsType } from 'config/types';

export function getColorVariant(name?: keyof ColorsType, colors?: ColorsType) {
  return colors ? (name && colors[name]) || '' : '';
}
