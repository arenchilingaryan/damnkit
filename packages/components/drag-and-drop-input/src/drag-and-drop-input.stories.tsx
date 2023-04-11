import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DragAndDropInput from 'components/drag-and-drop-input/src/drag-and-drop-input';
import { DragAndDropInputProps } from 'components/drag-and-drop-input/src/drag-and-drop-input-types';

export default {
  title: 'Core/DragAndDropInput',
  component: DragAndDropInput,
} as Meta;

const Template: Story<DragAndDropInputProps> = (args) => <DragAndDropInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onFilesLoaded: (base64Files: string[]) => {
    console.log('File loaded:', base64Files);
  },
};
