import { SpaceType } from 'config/types';

export type Space = {
  top?: string | keyof SpaceType;
  right?: string | keyof SpaceType;
  bottom?: string | keyof SpaceType;
  left?: string | keyof SpaceType;
};
