import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button as CoreButton } from './button';

export default {
  title: 'Core',
  component: CoreButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof CoreButton> = (args) => <CoreButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  primary: true,
  children: 'Button',
};
