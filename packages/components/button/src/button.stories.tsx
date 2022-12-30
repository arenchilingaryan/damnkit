import React from 'react';
import CoreButton from './button';

export default {
  title: 'Core',
  component: CoreButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = () => <CoreButton>123</CoreButton>;

export const Button = Template.bind({});

export const Text = () => <CoreButton>Hello Button</CoreButton>;
