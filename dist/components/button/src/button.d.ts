import React from 'react';
import { ButtonProps } from './button-types';
declare const Button: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & import("../../../types/component-types").RequireComponentProps & {
    type?: "button" | "reset" | "submit" | undefined;
    leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<ButtonProps>>;
export default Button;
