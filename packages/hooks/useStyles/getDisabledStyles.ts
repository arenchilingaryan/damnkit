import { CSSProperties } from 'styled-components';
import { getMixedStyles } from 'hooks/useStyles/getMixedStyles';
import { CssMixesType } from 'config/types';

export function getDisabledStyles(disabledStylesProps?: string | CSSProperties, mixes?: CssMixesType) {
  if (!disabledStylesProps) {
    if (mixes) {
      const styles = mixes['disabledStyle'];
      if (styles) return styles;
    }
    return false;
  }
  if (typeof disabledStylesProps === 'string') {
    return getMixedStyles(disabledStylesProps);
  }
  return disabledStylesProps;
}
