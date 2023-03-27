import { BoxMediaVariantType } from 'components/box';
import { getStylesFromObject } from 'hooks/useStyles/getStylesFromObject';
import { css } from 'styled-components';
import { Metrics, SpaceType } from 'config/types';

const spaceDirections = ['top', 'right', 'bottom', 'left'];

export function getBreakpointsStyles(
  element: object | string | number,
  type: BoxMediaVariantType,
  dir: string,
  space?: SpaceType,
  defaultMetricSystem?: Metrics,
) {
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
    const objStylesArr = getStylesFromObject<typeof element>('margin', element, type, dir);
    additionalStyles.push(...objStylesArr);
  }

  if (typeof element !== 'object' && !Array.isArray(element)) {
    if (typeof element === 'string') {
      const value = space && space[element];
      if (value) {
        if (typeof value === 'object') {
          additionalStyles.push(css`
            ${dir}: ${value.size + value.metricSystem + ';'}
          `);
        } else {
          additionalStyles.push(css`
            ${dir}: ${value + (defaultMetricSystem || 'px') + ';'}
          `);
        }
      } else {
        additionalStyles.push(css`
          ${dir}: ${element + ';'}
        `);
      }
    } else {
      additionalStyles.push(css`
        ${dir}: ${element + (defaultMetricSystem || 'px') + ';'}
      `);
    }
  }

  return additionalStyles;
}
