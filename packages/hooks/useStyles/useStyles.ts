import { useContext } from 'react';
import { ConfigContext } from '../../config/context/config-context';
import { Properties } from 'csstype';
import { SpaceObjectProperty } from '../../config/types';
import { Space } from '../../components/button/src/button-types';

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

  function getColorVariant(name: string) {
    return colors ? colors[name] || '' : '';
  }

  function getCorrectSpaceValue(sizeName: string | number) {
    if (!space || !defaultMetricSystem) return '';
    if (space[sizeName]) {
      const currentSize = space[sizeName];
      if (typeof currentSize === 'number') {
        return currentSize + defaultMetricSystem;
      }
      const { size, metricSystem } = currentSize as SpaceObjectProperty;
      return size + metricSystem;
    }
  }

  function getSpaces(type: 'margin' | 'padding', params?: Space) {
    const result: Properties = {};
    if (!space || !params) return result;

    const { bottom, left, right, top } = params;
    if (bottom) result[`${type}Bottom`] = getCorrectSpaceValue(bottom);
    if (left) result[`${type}Left`] = getCorrectSpaceValue(left);
    if (right) result[`${type}Right`] = getCorrectSpaceValue(right);
    if (top) result[`${type}Top`] = getCorrectSpaceValue(top);

    return result;
  }

  return {
    getMixedStyles,
    getColorVariant,
    getSpaces,
  };
}
