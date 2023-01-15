import React, { ReactElement } from 'react';
import { SpaceProps } from './space-types';
import styled from 'styled-components';
import { useStyles } from '../../../hooks/useStyles/useStyles';

const Space = (props: SpaceProps) => {
  const {
    className,
    component = 'div',
    children,
    id,
    testId,
    spaceType = 'padding',
    mediaVariant = 'min-width',
    ...rest
  } = props;

  const { getBreakpointsStyles } = useStyles();

  if (typeof children === 'function') {
    return children(className || '');
  }

  const element = React.createElement(component, { className: className || '', id, 'data-testid': testId }, children);

  const spaceConfig = {
    top: rest.top,
    bottom: rest.bottom,
    right: rest.right,
    left: rest.left,
  };

  const breakpointsStyles = getBreakpointsStyles(spaceType, mediaVariant, spaceConfig);

  console.log(breakpointsStyles);

  const renderComponent = (Element: ReactElement) => styled(({ className }) => (
    <Element.type {...Element.props} className={className} />
  ))`
    ${breakpointsStyles}
  `;

  const Component = renderComponent(element);

  return <Component />;
};

export default Space;
