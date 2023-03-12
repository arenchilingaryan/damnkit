import { ChangeEventHandler, InputHTMLAttributes, MouseEventHandler } from 'react';
import { RequireComponentProps } from 'types/component-types';

export type InputPropsType = InputHTMLAttributes<HTMLInputElement> &
  RequireComponentProps & {
    onChange: (e: ChangeEventHandler<HTMLInputElement>) => void;
    onClick: (e: MouseEventHandler<HTMLInputElement>) => void;
  };
