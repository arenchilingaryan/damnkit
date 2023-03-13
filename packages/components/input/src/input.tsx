import React, { forwardRef } from 'react';
import { useStyles } from 'hooks/useStyles/useStyles';
import { InputPropsType } from 'components/input';
import { _Input } from 'components/input/src/input-core';

const Input = forwardRef<InputPropsType, InputPropsType>((props, ref) => {
  const { getMixedStyles, getColorVariant, getSpaces, getDisabledStyles } = useStyles();

  const styles = {};

  return <_Input style={styles} ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
