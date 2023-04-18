import React, { forwardRef } from 'react';
import { ButtonProps } from './button-types';
import { _Button, _ButtonContent } from './button-core';
import { Spinner } from 'components/spinner/index';
import { useComponentCommonConfig } from 'hooks/useComponentCommonConfig/useComponentCommonConfig';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { styles } = useComponentCommonConfig(props, 'button');
  const { ...buttonProps } = props;

  return (
    <_Button style={styles} ref={ref} {...buttonProps}>
      {props.leftIcon && props.leftIcon}
      <_ButtonContent isHide={!!props.isLoading}>{props.children}</_ButtonContent>
      {props.rightIcon && props.rightIcon}
      {props.isLoading && (props.spinner ? props.spinner : <Spinner />)}
    </_Button>
  );
});

Button.displayName = 'Button';

export default Button;
