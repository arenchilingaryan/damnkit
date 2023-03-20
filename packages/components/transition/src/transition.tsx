import React from 'react';
import classes from './transition.module.css';
import { CSSTransition } from 'react-transition-group';
import { TransitionPropsType } from './transition-types';

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
        enter: enterClassName || classes.enter,
        enterActive: enterActive || classes.enterActive,
        exit: exitClassName || classes.exit,
        exitActive: exitActive || classes.exitActive,
      }}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
