import React from 'react';
import { ComponentStory } from '@storybook/react';
import CoreButton from './button';

export default {
  title: 'Core',
  component: CoreButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: ComponentStory<typeof CoreButton> = (args) => <CoreButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: 'Button',
};
