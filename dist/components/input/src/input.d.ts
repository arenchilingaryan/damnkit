import React from 'react';
import { InputPropsType } from 'components/input';
declare const Input: React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & import("../../../types/component-types").RequireComponentProps & {
    onChange: (e: React.ChangeEventHandler<HTMLInputElement>) => void;
    onClick: (e: React.MouseEventHandler<HTMLInputElement>) => void;
} & React.RefAttributes<InputPropsType>>;
export default Input;
