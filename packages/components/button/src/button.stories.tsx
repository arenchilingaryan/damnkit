import React from 'react';
import CoreButton from './button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { disableStoriesControls } from '../../../utils/disableStoriesControls';

export default {
  title: 'Core/Buttons',
  component: CoreButton,
  argTypes: {
    ...disableStoriesControls('mixName', 'spinner', 'variant', 'margin', 'space', 'rightIcon', 'leftIcon', 'isActive'),
  },
} as ComponentMeta<typeof CoreButton>;

const Template: ComponentStory<typeof CoreButton> = (args) => <CoreButton {...args}>Button</CoreButton>;

Template.argTypes = {};

export const Button = Template.bind({});
