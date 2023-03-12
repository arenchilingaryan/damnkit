import React, { forwardRef } from 'react';
import { InputPropsType } from 'components/input';
import { _Input } from 'components/input/src/input-core';
import { useComponentCommonConfig } from 'hooks/useComponentCommonConfig/useComponentCommonConfig';

const Input = forwardRef<InputPropsType, InputPropsType>((props, ref) => {
  const { styles } = useComponentCommonConfig(props, 'input');

  return <_Input style={styles} ref={ref} {...props} />;
});

Input.displayName = 'Input';

export default Input;
