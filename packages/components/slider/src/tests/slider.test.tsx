import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from '../slider';
import '@testing-library/jest-dom/extend-expect';

describe('Slider', () => {
  it('renders the Slider component', () => {
    render(
      <Slider>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Slider>,
    );

    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider.childElementCount).toBe(3);
  });
});
