import { CSSProperties } from 'styled-components';

export const enterStyles: CSSProperties = {
  opacity: 0,
};

export const enterActiveStyles: CSSProperties = {
  opacity: 1,
  transition: 'all .3s',
};

export const exitStyles: CSSProperties = {
  opacity: 1,
};

export const exitActiveStyles: CSSProperties = {
  opacity: 0,
  transition: 'all .3s',
};
