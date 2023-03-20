import { PropsWithChildren } from 'react';

export type StateClassNames = {
  enterClassName?: string;
  exitClassName?: string;
  enterActive?: string;
  exitActive?: string;
};

export type TransitionPropsType = PropsWithChildren &
  StateClassNames & {
    show: boolean;
    delay?: string | number;
    unmountOnExit?: boolean;
  };
