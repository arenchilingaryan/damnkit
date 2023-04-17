import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Slider from './slider';
import { SliderProps } from './slider-types';

export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <Slider {...args}>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </Slider>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomClassNames = Template.bind({});
CustomClassNames.args = {
  wrapperClassName: 'custom-wrapper',
  sliderClassName: 'custom-slider',
  itemWrapperClassName: 'custom-item-wrapper',
};
