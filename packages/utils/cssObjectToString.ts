import { CSSProperties } from 'styled-components';

export function cssObjectToString(obj: CSSProperties) {
  return JSON.stringify(obj);
}
