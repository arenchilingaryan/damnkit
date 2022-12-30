import { PropsWithChildren } from 'react';
import { Config } from '../types';
type DamnProviderPropsType = {
    config?: Config;
};
export type DamnProviderType = PropsWithChildren<DamnProviderPropsType>;
export {};
