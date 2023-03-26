import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '../index';

describe('Input component', () => {
  test('renders without crashing', () => {
    const { getByPlaceholderText } = render(
      <Input
        onChange={(e) => console.log(e)}
        onClick={console.log}
        value="123"
        type="text"
        placeholder="Type the text"
      />,
    );
    expect(getByPlaceholderText('Type the text')).toBeInTheDocument();
  });

  test('displays passed value', () => {
    const { getByDisplayValue } = render(
      <Input onChange={(e) => console.log(e)} onClick={console.log} value="TestValue" type="text" placeholder="123" />,
    );
    expect(getByDisplayValue('TestValue')).toBeInTheDocument();
  });

  test('calls onChange when the input value changes', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <Input onChange={handleChange} onClick={handleChange} value="123" type="text" placeholder="Type the text" />,
    );

    fireEvent.change(getByPlaceholderText('Type the text'), {
      target: { value: 'New text' },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
