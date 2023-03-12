import React, { forwardRef, useMemo } from 'react';
import { ButtonProps } from './button-types';
import { useStyles } from 'hooks/useStyles/useStyles';
import { _Button, _ButtonContent } from './button-core';
import { Spinner } from 'components/spinner/src';
import ButtonDefaultStyles from 'config/baseStyles';
import { CSSProperties } from 'styled-components';

const Button = forwardRef<ButtonProps, ButtonProps>((props, ref) => {
  const { getMixedStyles, getColorVariant, getSpaces, getDisabledStyles } = useStyles();

  const disabledStyles =
    props.disabled && (getDisabledStyles(props.disableStyles) || ButtonDefaultStyles.disabledStyles);

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

  return (
    <_Button style={styles} ref={ref} {...props}>
      {props.leftIcon && props.leftIcon}
      <_ButtonContent isHide={!!props.isLoading}>{props.children}</_ButtonContent>
      {props.rightIcon && props.rightIcon}
      {props.isLoading && (props.spinner ? props.spinner : <Spinner />)}
    </_Button>
  );
});

Button.displayName = 'Button';

export default Button;
