import React, { forwardRef } from 'react';
import { ButtonProps } from './button-types';
import { useStyles } from '../../../hooks/useStyles/useStyles';
import { _Button, _ButtonContent } from './button-core';
import { Spinner } from '../../spinner/src';

const Button = forwardRef<ButtonProps, ButtonProps>((props, ref) => {
  const { getMixedStyles, getColorVariant, getSpaces } = useStyles();

  const styles = {
    ...props.style,
    ...getMixedStyles(props.mixName),
    ...getSpaces('padding', props.space),
    ...getSpaces('margin', props.margin),
  };

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
