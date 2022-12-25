import { PropsWithChildren } from 'react';
import { Config } from '../types';

type DamnProviderPropsType = {
  theme?: Config;
};

export type DamnProviderType = PropsWithChildren<DamnProviderPropsType>;
