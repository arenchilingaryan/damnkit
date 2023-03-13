import { TagNames } from 'types/component-types';
import { CSSProperties } from 'styled-components';

type DictionaryType = Record<TagNames, { disabledStyles?: CSSProperties }>;

export const stylesDictionary: DictionaryType = {
  button: {
    disabledStyles: {
      backgroundColor: '#D4E3FC',
      color: 'white',
    },
  },
  input: {},
};
