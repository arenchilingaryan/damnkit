import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../button';
import { axe } from 'jest-axe';

const icon = (
  <svg className="svg-icon" data-testid="icon" viewBox="0 0 20 20">
    <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
  </svg>
);

const onClick = jest.fn();

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

    render(<Button value={label} onClick={onClick} data-testid={'button'} />);

    const button = screen.getByTestId('button');
    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('render left icons correctly', () => {
    render(
      <Button value="button" leftIcon={icon} onClick={onClick} data-testid={'button'}>
        Button
      </Button>,
    );

    const arrow = screen.getByTestId('icon');
    expect(arrow).toHaveClass('svg-icon');
  });

  test('render right icons correctly', () => {
    render(
      <Button value="button" rightIcon={icon} onClick={onClick} data-testid={'button'}>
        Button
      </Button>,
    );

    const arrow = screen.getByTestId('icon');
    expect(arrow).toHaveClass('svg-icon');
  });

  test('render custom spinner correctly', () => {
    render(
      <Button
        value="button"
        isLoading
        spinner={
          <div className="spinner" role="alert">
            Loading...
          </div>
        }
        onClick={onClick}
        data-testid={'button'}
      >
        Button
      </Button>,
    );

    const spinner = screen.getByRole('alert');
    expect(spinner).toHaveClass('spinner');
  });

  test('render spinner correctly', () => {
    render(
      <Button value="button" isLoading onClick={onClick} data-testid={'button'}>
        Button
      </Button>,
    );

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('loading');
  });

  test('should render accessible button', async () => {
    const { container } = render(<Button data-testid={'button'}>Text</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
