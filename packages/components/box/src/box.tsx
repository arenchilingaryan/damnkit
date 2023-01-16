import React, { ReactElement } from 'react';
import { BoxProps } from './box-types';
import styled from 'styled-components';
import { useStyles } from '../../../hooks/useStyles/useStyles';

const Box = (props: BoxProps) => {
  const {
    className,
    component = 'div',
    children,
    id,
    testId,
    boxType = 'padding',
    mediaVariant = 'min-width',
    ...rest
  } = props;

  const { getBreakpointsStyles, getStylesFromObject } = useStyles();

  if (typeof children === 'function') {
    return children(className || '');
  }

  const element = React.createElement(component, { className: className || '', id, 'data-testid': testId }, children);

  const a = getBreakpointsStyles(
    boxType,
    [
      { m: 35, s: 14 },
      { s: 1, m: 122 },
    ],
    mediaVariant,
  );
  console.log(a);
  // const breakpointsStyles = getBreakpointsStyles(boxType, mediaVariant, );

  const renderComponent = (Element: ReactElement) =>
    styled(({ className }) => <Element.type {...Element.props} className={className} />)``;

  const Component = renderComponent(element);

  return <Component />;
};

export default Box;
