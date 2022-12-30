import React from 'react';
import { ComponentStory } from '@storybook/react';
declare const _default: {
    title: string;
    component: React.ForwardRefExoticComponent<React.ParamHTMLAttributes<import("./button-types").ButtonOptions> & {
        children?: React.ReactNode;
    } & React.RefAttributes<HTMLButtonElement>>;
    argTypes: {
        backgroundColor: {
            control: string;
        };
    };
};
export default _default;
export declare const Button: ComponentStory<React.ForwardRefExoticComponent<React.ParamHTMLAttributes<import("./button-types").ButtonOptions> & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>>;
