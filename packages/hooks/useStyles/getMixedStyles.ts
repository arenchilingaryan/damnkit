import { Properties } from 'csstype';
import { ColorsType, CssMixesType, Metrics, SpaceObjectProperty, SpaceType } from 'config/types';

export function getMixedStyles(
  name: string | undefined,
  space?: SpaceType,
  mixes?: CssMixesType,
  defaultMetricSystem?: Metrics,
  colors?: ColorsType,
) {
  const result = {} as { [key: string]: string };

  if (!mixes || !name || !mixes[name]) {
    return result;
  }
  const currentMix = mixes[name];

  for (const property in currentMix) {
    const value = currentMix[property as keyof Properties];
    if (!value) continue;

    if (space && space[value] && defaultMetricSystem) {
      if (typeof space[value] === 'number') {
        result[property as keyof Properties] = space[value] + defaultMetricSystem;
      } else {
        const { size, metricSystem } = space[value] as SpaceObjectProperty;
        result[property as keyof Properties] = size.toString() + metricSystem;
      }
      continue;
    }
    if (colors && colors[value]) {
      result[property as keyof Properties] = colors[value];
      continue;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result[property] = currentMix[property];
  }
  return result;
}
