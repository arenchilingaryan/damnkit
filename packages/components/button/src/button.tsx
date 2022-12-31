import React, { forwardRef, useContext } from 'react';
import { ButtonProps } from './button-types';
import styled from 'styled-components';
import { ConfigContext } from '../../../config/context/config-context';
import { useStyles } from '../../../hooks/useStyles/useStyles';

const Button = forwardRef<ButtonProps, ButtonProps>((props, ref) => {
  const context = useContext(ConfigContext);
  const { getMixedStyles } = useStyles();
  const styles = { ...props.style, ...getMixedStyles(props.mixName) };

  return (
    <_Button style={styles} ref={ref} {...props}>
      {props.children}
    </_Button>
  );
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
