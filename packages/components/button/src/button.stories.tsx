import React from 'react';
import CoreButton from './button';

export default {
  title: 'Core',
  component: CoreButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = () => <CoreButton mixName={'primary'}>123</CoreButton>;

export const Button = Template.bind({});
