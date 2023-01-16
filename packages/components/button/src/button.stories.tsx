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
    <Box mb={44} pt={50} ml={{ xs: 20, l: 100 }} boxType="margin" testId={'123'}>
      <CoreButton isLoading mixName={'primary'}>
        Button
      </CoreButton>
    </Box>
    <CoreButton mixName={'primary'}>Button</CoreButton>
    <CoreButton mixName={'primary'}>Button</CoreButton>
  </>
);

export const Button = ButtonGroup.bind({});
