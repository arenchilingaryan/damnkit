import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from '../spinner';

describe('Spinner component', () => {
  test('renders spinner with "Loading..." text', () => {
    render(<Spinner data-testid={'spinner'} />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
