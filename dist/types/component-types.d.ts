import { SpaceType } from 'config/types';
import { CSSProperties } from 'styled-components';
import React from 'react';
export type Space = {
    top?: string | keyof SpaceType;
    right?: string | keyof SpaceType;
    bottom?: string | keyof SpaceType;
    left?: string | keyof SpaceType;
};
export type RequireComponentProps = {
    mixName?: string;
    variant?: string;
    padding?: Space;
    margin?: Space;
    isLoading?: boolean;
    disabled?: boolean;
    disableStyles?: string | CSSProperties;
    spinner?: React.ReactElement;
    style?: CSSProperties;
};
export type TagNames = 'input' | 'button';
