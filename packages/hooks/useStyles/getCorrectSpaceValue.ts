import { Metrics, SpaceObjectProperty, SpaceType } from 'config/types';

export function getCorrectSpaceValue(sizeName: string | number, space?: SpaceType, defaultMetricSystem?: Metrics) {
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
