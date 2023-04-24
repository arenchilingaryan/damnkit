import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DragAndDropInput from 'components/drag-and-drop-input/src/drag-and-drop-input';
import { DragAndDropInputProps } from 'components/drag-and-drop-input/src/drag-and-drop-input-types';

export default {
  title: 'Core/DragAndDropInput',
  component: DragAndDropInput,
} as Meta;

const Template: Story<DragAndDropInputProps> = () => {
  const [data, setData] = useState<string[]>([]);
  return <DragAndDropInput multiple style={{ height: 500 }} files={data} onFilesLoaded={(e) => setData(e)} />;
};

export const Default = Template.bind({});
Default.args = {};
