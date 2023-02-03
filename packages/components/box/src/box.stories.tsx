import Box from './box';
import React from 'react';
import CoreButton from '../../button/src/button';

export default {
  title: 'Core',
  component: CoreButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const divStyles = { backgroundColor: 'red', width: '200px', height: '200px' };

const BoxComponent = () => (
  <Box mb={44} pt={50} ml={{ xs: 20, l: 100 }} p={2}>
    <div style={divStyles} />
  </Box>
);

export const Space = BoxComponent.bind({});
