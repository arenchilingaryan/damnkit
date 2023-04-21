// export config
export { DamnProvider, type DamnProviderPropsType, type DamnProviderType } from './config/DamnProvider';
export { type Config, type ColorsType, type SpaceType } from './config/types';

// export hooks
export { useOnClickOutside } from './hooks/useOutsideClick/useOutsideClick';

// export components
export {
  Box,
  type BoxConfig,
  type BoxMediaVariantType,
  type BoxPropertyConfig,
  type BoxProps,
} from './components/box/index';

export { Button, type ButtonOptions } from './components/button';
export { Input, type InputPropsType } from './components/input/index';
export { Transition, type TransitionPropsType } from './components/transition/index';
export {
  type DropdownMenuProps,
  type ItemRequiredType,
  type ComponentType,
  type DropdownProps,
  DropDown,
} from './components/drop-down/index';
export { DragAndDropInput, type DragAndDropInputProps } from './components/drag-and-drop-input/index';
export { Slider, type SliderProps } from './components/slider/index';
