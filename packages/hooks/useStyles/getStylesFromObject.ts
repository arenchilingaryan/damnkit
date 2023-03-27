import { BoxMediaVariantType, ResponsiveBoxValue, SpacingType } from 'components/box/src/box-types';
import { BreakpointsType, Metrics, SpaceObjectProperty, SpaceType } from 'config/types';
import { css } from 'styled-components';
import { Space } from 'types/component-types';

function valueAsCss(
  valueIsVariable: boolean,
  value: string | number | SpaceObjectProperty,
  defaultMetricSystem?: Metrics,
) {
  if (!valueIsVariable) {
    return value + (defaultMetricSystem || 'px');
  }
  if (typeof value === 'object') {
    return value.size + value.metricSystem;
  }
}

export const getStylesFromObject = <T>(
  spaceType: SpacingType,
  element: T,
  type: BoxMediaVariantType,
  direction: string,
  breakpoints?: BreakpointsType,
  space?: Space,
  defaultMetricSystem?: Metrics,
) => {
  const additionalStyles = [];

  for (const j in element) {
    const elementByKey = element[j as keyof ResponsiveBoxValue] as keyof SpaceType;
    const valueIsVariable = !!space && !!space[elementByKey as keyof Space];
    const value = valueIsVariable ? space[elementByKey as keyof Space] : elementByKey;
    const cssValue = valueAsCss(valueIsVariable, value as string | number | SpaceObjectProperty, defaultMetricSystem);
    if (breakpoints && breakpoints.sizes) {
      additionalStyles.push(css`
        @media (${type}: ${breakpoints.sizes[j]}px) {
          ${direction}: ${cssValue}
        }
      `);
    }
  }
  return additionalStyles;
};
