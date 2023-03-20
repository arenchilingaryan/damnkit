import { ReactNode } from 'react';

export type OutsideClickProps = {
  children: ReactNode;
  onOutsideClick: () => void;
};
