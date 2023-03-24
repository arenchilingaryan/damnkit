import { TagNames } from 'types/component-types';
import { CSSProperties } from 'styled-components';
type DictionaryType = Record<TagNames, {
    disabledStyles?: CSSProperties;
}>;
export declare const stylesDictionary: DictionaryType;
export {};
