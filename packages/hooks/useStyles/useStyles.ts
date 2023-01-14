import { useContext } from 'react';
import { ConfigContext } from '../../config/context/config-context';
import { Properties } from 'csstype';
import { BreakpointsType, SpaceObjectProperty, SpaceType } from '../../config/types';
import { Space } from '../../components/button/src/button-types';
import { ResponsiveSpaceValue, SpaceConfig } from '../../components/Space/src/Space.types';
import { css } from 'styled-components';

export function useStyles() {
  const { space, colors, mixes, defaultMetricSystem, breakpoints } = useContext(ConfigContext);

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

  function valueAsCss(valueIsVariable: boolean, value: string | number | SpaceObjectProperty) {
    if (!valueIsVariable) {
      return value + (defaultMetricSystem || 'px');
    }
    if (typeof value === 'object') {
      return value.size + value.metricSystem;
    }
  }

  function getBreakpointsStyles(
    spaceType: 'margin' | 'padding',
    type: 'min-width' | 'max-width',
    config: SpaceConfig,
    metric: string,
  ) {
    const additionalStyles = [];

    for (const i in config) {
      const element = config[i as keyof SpaceConfig];

      if (typeof element === 'object') {
        for (const j in element) {
          const elementByKey = element[j as keyof ResponsiveSpaceValue] as keyof SpaceType;
          const valueIsVariable = !!space && !!space[elementByKey];
          const value = valueIsVariable ? space[elementByKey] : elementByKey;
          const cssValue = valueAsCss(valueIsVariable, value);
          if (breakpoints) {
            additionalStyles.push(css`
              @media (${type}: ${breakpoints[j as keyof BreakpointsType]}) {
                ${spaceType + '-' + i}: ${cssValue}
              }
            `);
          }
        }
      } else {
        additionalStyles.push(css`
          ${spaceType + '-' + i}: ${element + metric}
        `);
      }
    }

    return additionalStyles;
  }

  return {
    getMixedStyles,
    getColorVariant,
    getSpaces,
    getBreakpointsStyles,
  };
}
