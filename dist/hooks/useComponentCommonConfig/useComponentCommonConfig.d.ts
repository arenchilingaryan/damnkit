import { CSSProperties } from 'styled-components';
import { RequireComponentProps, TagNames } from 'types/component-types';
export declare function useComponentCommonConfig<T extends RequireComponentProps>(props: T, type: TagNames): {
    styles: CSSProperties;
};
