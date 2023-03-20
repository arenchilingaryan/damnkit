import React from 'react';
import CoreDropdown from './drop-down';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { disableStoriesControls } from 'utils/disableStoriesControls';

export default {
  title: 'Core/Dropdown',
  component: CoreDropdown,
  argTypes: {
    ...disableStoriesControls('mixName', 'spinner', 'variant', 'rightIcon', 'leftIcon', 'disableStyles'),
  },
} as ComponentMeta<typeof CoreDropdown>;

const Template: ComponentStory<typeof CoreDropdown> = () => (
  <div>
    <CoreDropdown position="auto">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </CoreDropdown>
  </div>
);

export const DropDown = Template.bind({});
