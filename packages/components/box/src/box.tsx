import React, { ReactElement } from 'react';
import { BoxProps } from './box-types';
import styled from 'styled-components';
import { getBoxStyles } from 'hooks/useStyles/getBoxStyles';

const Box = (props: BoxProps) => {
  const { className, component = 'div', children, id, testId, ...rest } = props;

  if (typeof children === 'function') {
    return children(className || '');
  }

  const element = React.createElement(component, { className: className || '', id, 'data-testid': testId }, children);

  const styles = getBoxStyles(props);

  const renderComponent = (Element: ReactElement) =>
    styled(({ className }) => <Element.type {...Element.props} className={className} />)`
      ${styles}
    `;

  const Component = renderComponent(element);

  return <Component {...rest} />;
};

export default Box;
