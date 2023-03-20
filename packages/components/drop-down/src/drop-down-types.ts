import { PropsWithChildren } from 'react';

type PositionType = 'top' | 'bottom' | 'auto';

export type DropdownProps = PropsWithChildren & {
  position?: PositionType;
  delay?: string | number;
};

export type DropdownMenuProps = {
  position: PositionType;
};
