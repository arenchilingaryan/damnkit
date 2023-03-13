import { useStyles } from 'hooks/useStyles/useStyles';
import { CSSProperties } from 'styled-components';
import { useMemo } from 'react';
import { RequireComponentProps, TagNames } from 'types/component-types';
import { stylesDictionary } from 'config/baseStyles/dictionary';

export function useComponentCommonConfig<T extends RequireComponentProps>(props: T, type: TagNames) {
  const { getMixedStyles, getColorVariant, getSpaces, getDisabledStyles } = useStyles();

  const disabledStyles =
    props.disabled && (getDisabledStyles(props.disableStyles) || stylesDictionary[type].disabledStyles);

  const styles: CSSProperties = useMemo(
    () => ({
      ...props.style,
      ...getMixedStyles(props.mixName),
      ...getSpaces('padding', props.padding),
      ...getSpaces('margin', props.margin),
      ...disabledStyles,
    }),
    [],
  );

  if (props.variant) {
    styles.backgroundColor = getColorVariant(props.variant);
  }

  return { styles };
}
