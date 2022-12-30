import { PropsWithChildren } from 'react';
import { Config } from '../types';
export type DamnProviderPropsType = {
    config?: Config;
};
export type DamnProviderType = PropsWithChildren<DamnProviderPropsType>;
