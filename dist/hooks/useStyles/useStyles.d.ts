import { Properties } from 'csstype';
import { BoxMediaVariantType, SpacingType, BoxProps } from 'components/box/src/box-types';
import { CSSProperties } from 'styled-components';
import { Space } from 'types/component-types';
export declare function useStyles(): {
    getMixedStyles: (name: string | undefined) => {
        [key: string]: string;
    };
    getColorVariant: (name: string) => string;
    getSpaces: (type: 'margin' | 'padding', params?: Space) => Properties<0 | (string & {}), string & {}>;
    getBreakpointsStyles: (element: object | string | number, type: BoxMediaVariantType, dir: string) => import("styled-components").FlattenSimpleInterpolation[];
    getStylesFromObject: <T>(spaceType: SpacingType, element: T, type: BoxMediaVariantType, direction: string) => import("styled-components").FlattenSimpleInterpolation[];
    getBoxStyles: (props: BoxProps) => import("styled-components").FlattenSimpleInterpolation[];
    getDisabledStyles: (disabledStylesProps?: string | CSSProperties) => false | Properties<import("config/types").PropertyValue, string & {}> | {
        [key: string]: string;
    };
};
