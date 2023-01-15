import React from 'react';
import CoreButton from './button';
import Box from '../../box/src/box';

export default {
  title: 'Core',
  component: CoreButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const ButtonGroup = () => (
  <>
    <Box bottom={44} top={50} left={{ xs: 20, l: 100 }} spaceType="margin" testId={'123'}>
      <CoreButton isLoading mixName={'primary'}>
        Button
      </CoreButton>
    </Box>
    <CoreButton mixName={'primary'}>Button</CoreButton>
    <CoreButton mixName={'primary'}>Button</CoreButton>
  </>
);

export const Button = ButtonGroup.bind({});
