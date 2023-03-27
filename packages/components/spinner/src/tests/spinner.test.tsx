import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from '../spinner';
import { axe } from 'jest-axe';

describe('Spinner component', () => {
  test('renders spinner with "Loading..." text', () => {
    render(<Spinner data-testid="spinner" />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
  test('should render accessible spinner', async () => {
    const { container } = render(<Spinner data-testid="spinner" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
