import React, { forwardRef, useContext } from 'react';
import { ButtonProps } from './button-types';
import styled from 'styled-components';
import { ConfigContext } from '../../../config/context/config-context';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const context = useContext(ConfigContext);
  console.log(context);
  return <_Button {...props}>{props.children}</_Button>;
});

const _Button = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  font-size: 16px;
  cursor: pointer;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
`;

Button.displayName = 'Button';

export default Button;
