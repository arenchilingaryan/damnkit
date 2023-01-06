import React from 'react';
import CoreButton from './button';

export default {
  title: 'Core',
  component: CoreButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const SimpleButton = () => (
  <CoreButton isLoading mixName={'primary'}>
    Button
  </CoreButton>
);

const ButtonGroup = () => (
  <>
    <div>
      <CoreButton isLoading mixName={'primary'}>
        Button
      </CoreButton>
    </div>
    <div>
      <CoreButton mixName={'primary'}>Button</CoreButton>
    </div>
  </>
);

export const Button = ButtonGroup.bind({});
