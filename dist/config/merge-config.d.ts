import { Config } from './types';
export declare function mergeConfig(theme: Config): {
    colors?: import("./types").ColorsType | undefined;
    space?: import("./types").SpaceType | undefined;
    defaultMetricSystem?: ("em" | "px" | "%") | undefined;
    mixes?: import("./types").CssMixesType | undefined;
    breakpoints?: import("./types").BreakpointsType | undefined;
};
