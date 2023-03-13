import React, { forwardRef } from 'react';
import { ButtonProps } from './button-types';
import { _Button, _ButtonContent } from './button-core';
import { Spinner } from 'components/spinner/src';
import { useComponentCommonConfig } from 'hooks/useComponentCommonConfig/useComponentCommonConfig';

const Button = forwardRef<ButtonProps, ButtonProps>((props, ref) => {
  const { styles } = useComponentCommonConfig(props, 'button');

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
