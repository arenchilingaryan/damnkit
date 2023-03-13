import { InputHTMLAttributes } from 'react';
import { RequireComponentProps } from 'types/component-types';

export type InputPropsType = InputHTMLAttributes<HTMLInputElement> & RequireComponentProps;
