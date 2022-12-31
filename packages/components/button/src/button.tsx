import React, { forwardRef, useContext } from 'react';
import { ButtonProps } from './button-types';
import { ConfigContext } from '../../../config/context/config-context';
import { useStyles } from '../../../hooks/useStyles/useStyles';
import { _Button } from './button-core';

const Button = forwardRef<ButtonProps, ButtonProps>((props, ref) => {
  const context = useContext(ConfigContext);
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
      {props.children}
    </_Button>
  );
});

Button.displayName = 'Button';

export default Button;
