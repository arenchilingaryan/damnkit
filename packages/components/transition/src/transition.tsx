import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionPropsType } from './transition-types';
import {
  enterActiveStyles,
  enterStyles,
  exitActiveStyles,
  exitStyles,
} from 'components/transition/src/transition-styles';
import { cssObjectToString } from 'utils/cssObjectToString';

const Transition = ({
  show,
  enterClassName,
  delay,
  children,
  unmountOnExit = true,
  exitActive,
  enterActive,
  exitClassName,
}: TransitionPropsType) => {
  return (
    <CSSTransition
      in={show}
      timeout={Number(delay) || 50}
      classNames={{
        enter: enterClassName || cssObjectToString(enterStyles),
        enterActive: enterActive || cssObjectToString(enterActiveStyles),
        exit: exitClassName || cssObjectToString(exitStyles),
        exitActive: exitActive || cssObjectToString(exitActiveStyles),
      }}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
