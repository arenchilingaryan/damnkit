import React, { HTMLAttributes } from 'react';
import { Loader } from './spinner-core';

const Spinner = (props: HTMLAttributes<HTMLSpanElement>) => (
  <Loader data-testid="spinner" className="loading" {...props} />
);

export default Spinner;
