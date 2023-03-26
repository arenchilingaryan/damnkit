import React, { HTMLAttributes } from 'react';
import { Loader } from './spinner-core';

const Spinner = (props: HTMLAttributes<HTMLSpanElement>) => <Loader {...props} />;

export default Spinner;
