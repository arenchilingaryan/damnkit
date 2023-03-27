import { Space } from 'types/component-types';
import { Properties } from 'csstype';
import { getCorrectSpaceValue } from 'hooks/useStyles/getCorrectSpaceValue';

export function getSpaces(type: 'margin' | 'padding', params?: Space, space?: Space) {
  const result: Properties = {};
  if (!space || !params) return result;

  const { bottom, left, right, top } = params;
  if (bottom) result[`${type}Bottom`] = getCorrectSpaceValue(bottom);
  if (left) result[`${type}Left`] = getCorrectSpaceValue(left);
  if (right) result[`${type}Right`] = getCorrectSpaceValue(right);
  if (top) result[`${type}Top`] = getCorrectSpaceValue(top);

  return result;
}
