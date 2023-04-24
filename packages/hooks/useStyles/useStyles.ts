import { useContext } from 'react';
import { ConfigContext } from 'config/context/config-context';
import { BoxMediaVariantType, SpacingType } from 'components/box/src/box-types';
import { CSSProperties } from 'styled-components';
import { Space } from 'types/component-types';
import { getMixedStyles } from './getMixedStyles';
import { getColorVariant } from './getColorVariant';
import { getCorrectSpaceValue } from './getCorrectSpaceValue';
import { getSpaces } from './getSpaces';
import { getStylesFromObject } from './getStylesFromObject';
import { getBreakpointsStyles } from './getBreakpointsStyles';
import { getDisabledStyles } from './getDisabledStyles';
import { ColorsType, CssMixesType } from 'config/types';

export function useStyles() {
  const { space, colors, mixes, defaultMetricSystem, breakpoints } = useContext(ConfigContext);

  function getMixedStylesWithContext(name: keyof CssMixesType) {
    return getMixedStyles(name, space, mixes, defaultMetricSystem, colors);
  }

  function getColorVariantWithContext(name: keyof ColorsType) {
    return getColorVariant(name, colors);
  }

  function getCorrectSpaceValueWithContext(sizeName: string | number) {
    return getCorrectSpaceValue(sizeName, space, defaultMetricSystem);
  }

  function getSpacesWithContext(type: 'margin' | 'padding', params?: Space) {
    return getSpaces(type, params, space);
  }

  function getStylesFromObjectWithContext<T>(
    spaceType: SpacingType,
    element: T,
    type: BoxMediaVariantType,
    direction: string,
  ) {
    return getStylesFromObject<T>(spaceType, element, type, direction, breakpoints, space, defaultMetricSystem);
  }

  function getBreakpointsStylesWithContext(element: object | string | number, type: BoxMediaVariantType, dir: string) {
    return getBreakpointsStyles(element, type, dir, space, defaultMetricSystem);
  }

  function getDisabledStylesWithContext(disabledStylesProps?: string | CSSProperties) {
    return getDisabledStyles(disabledStylesProps, mixes);
  }

  return {
    getMixedStyles: getMixedStylesWithContext,
    getColorVariant: getColorVariantWithContext,
    getCorrectSpace: getCorrectSpaceValueWithContext,
    getSpaces: getSpacesWithContext,
    getBreakpointsStyles: getBreakpointsStylesWithContext,
    getStylesFromObject: getStylesFromObjectWithContext,
    getDisabledStyles: getDisabledStylesWithContext,
  };
}
