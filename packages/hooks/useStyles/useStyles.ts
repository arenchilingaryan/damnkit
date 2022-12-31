import { useContext } from 'react';
import { ConfigContext } from '../../config/context/config-context';
import { Properties } from 'csstype';

export function useStyles() {
  const { space, colors, mixes, defaultMetricSystem } = useContext(ConfigContext);

  function getMixedStyles(name: string | undefined) {
    const result = {} as { [key: string]: string };

    if (!mixes || !name || !mixes[name]) {
      return result;
    }
    const currentMix = mixes[name];

    for (const property in currentMix) {
      const value = currentMix[property as keyof Properties];
      if (!value) continue;

      if (space && space[value] && defaultMetricSystem) {
        result[property as keyof Properties] = space[value] + defaultMetricSystem;
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

  function getColorVariant(name: string) {
    return colors ? colors[name] || '' : '';
  }

  return {
    getMixedStyles,
    getColorVariant,
  };
}
