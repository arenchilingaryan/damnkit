import { PropsWithChildren, ReactNode } from 'react';

type PositionType = 'top' | 'bottom' | 'auto';

export type ItemRequiredType = {
  id: string | number;
  title: string;
};

export type ComponentType<S> = string | ReactNode | ReactNode[] | (({ items }: { items: S }) => ReactNode);

export type DropdownProps<T extends ItemRequiredType> = {
  position?: PositionType;
  delay?: string | number;
  isCloseOutsideClick?: boolean;
  items: T[];
  children?: ComponentType<T[]>;
  onSelect: (item: T) => void;
};

export type DropdownMenuProps = PropsWithChildren & {
  position: PositionType;
};
