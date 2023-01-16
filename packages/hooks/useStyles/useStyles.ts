import { useContext } from 'react';
import { ConfigContext } from '../../config/context/config-context';
import { Properties } from 'csstype';
import { SpaceObjectProperty, SpaceType } from '../../config/types';
import { Space } from '../../components/button/src/button-types';
import {
  ResponsiveBoxValue,
  BoxConfig,
  BoxMediaVariantType,
  SpacingType,
  BoxPropertyConfig,
} from '../../components/box/src/box-types';
import { css } from 'styled-components';

const spaceDirections = ['top', 'right', 'bottom', 'left'];

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

  const getStylesFromObject = <T>(
    spaceType: SpacingType,
    element: T,
    type: BoxMediaVariantType,
    direction?: string,
  ) => {
    const additionalStyles = [];

    for (const j in element) {
      const elementByKey = element[j as keyof ResponsiveBoxValue] as keyof SpaceType;
      const valueIsVariable = !!space && !!space[elementByKey];
      const value = valueIsVariable ? space[elementByKey] : elementByKey;
      const cssValue = valueAsCss(valueIsVariable, value);
      if (breakpoints && breakpoints.sizes) {
        additionalStyles.push(css`
          @media (${type}: ${breakpoints.sizes[j]}px) {
            ${spaceType + (direction ? '-' + direction : '')}: ${cssValue}
          }
        `);
      }
    }
    return additionalStyles;
  };

  function getBreakpointsStyles(spaceType: SpacingType, element: any, type: BoxMediaVariantType, direction?: string) {
    const additionalStyles = [];

    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        const item = element[i];
        const direction = spaceDirections[i];
        if (typeof item === 'object') {
          const objStylesArr = getStylesFromObject<typeof item>('margin', item, type, direction);
          additionalStyles.push(...objStylesArr);
        }
      }
    }

    if (typeof element === 'object' && !Array.isArray(element)) {
      const objStylesArr = getStylesFromObject<typeof element>('margin', element, type, direction);
      additionalStyles.push(...objStylesArr);
    }

    if (typeof element !== 'object' && !Array.isArray(element)) {
      additionalStyles.push(css`
        ${spaceType}: ${element + (defaultMetricSystem || 'px') + ';'}
      `);
    }

    return additionalStyles;
  }

  return {
    getMixedStyles,
    getColorVariant,
    getSpaces,
    getBreakpointsStyles,
    getStylesFromObject,
  };
}
