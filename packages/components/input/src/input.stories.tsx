import React from 'react';
import CoreInput from './input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { disableStoriesControls } from 'utils/disableStoriesControls';

export default {
  title: 'Core/Buttons',
  component: CoreInput,
  argTypes: {
    ...disableStoriesControls('mixName', 'spinner', 'variant', 'rightIcon', 'leftIcon', 'disableStyles'),
  },
} as ComponentMeta<typeof CoreInput>;

const Template: ComponentStory<typeof CoreInput> = (args) => <CoreInput {...args}>Button</CoreInput>;

export const Input = Template.bind({});
