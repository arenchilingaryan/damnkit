import React from 'react';
import CoreDropdown from './drop-down';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { disableStoriesControls } from 'utils/disableStoriesControls';

type ItemType = {
  title: string;
  id: number;
};

const data: ItemType[] = [
  { title: 'one', id: 1 },
  { title: 'two', id: 2 },
];

const renderChildren = ({ items }: { items: ItemType[] }) => items.map((x) => <div key={x.id}>{x.title}</div>);

const selectItem = (item: ItemType) => console.log(item);

export default {
  title: 'Core/Dropdown',
  component: CoreDropdown,
  argTypes: {
    ...disableStoriesControls('mixName', 'spinner', 'variant', 'rightIcon', 'leftIcon', 'disableStyles'),
  },
} as ComponentMeta<typeof CoreDropdown>;

const Template: ComponentStory<typeof CoreDropdown> = () => (
  <div>
    <CoreDropdown isCloseOutsideClick onSelect={selectItem} items={data} position="auto">
      {renderChildren}
    </CoreDropdown>
  </div>
);

export const DropDown = Template.bind({});
