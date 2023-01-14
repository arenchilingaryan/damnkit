import React from "react";
import { SpaceProps } from "./Space.types";

export function Space(props: SpaceProps) {
  const {
    className,
    Component = 'div',
    children,
    id,
    testId,
    ...rest
  } = props;

  if (typeof children === 'function') {
    return children(className || "");
  }

  return (
    <Component
      className={className || ""}
      data-testId={testId}
    >
      {children}
    </Component>
  )
}

