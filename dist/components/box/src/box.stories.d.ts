import React from 'react';
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & import("../../../types/component-types").RequireComponentProps & {
        type?: "button" | "reset" | "submit" | undefined;
        leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
        rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    } & {
        children?: React.ReactNode;
    } & React.RefAttributes<import("../../button/src/button-types").ButtonProps>>;
    argTypes: {
        backgroundColor: {
            control: string;
        };
    };
};
export default _default;
export declare const SpaceBox: () => JSX.Element;
