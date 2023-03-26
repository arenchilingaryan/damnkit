import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../button';

describe('Button component', () => {
  test('renders button with label', () => {
    const label = 'Click me';
    render(<Button data-testid={'button'}>{label}</Button>);

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(label);
  });

  test('calls onClick callback when clicked', () => {
    const label = 'Click me';
    const onClick = jest.fn();

    render(<Button value={label} onClick={onClick} data-testid={'button'} />);

    const button = screen.getByTestId('button');
    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
