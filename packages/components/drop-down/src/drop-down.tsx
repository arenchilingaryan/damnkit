import React, { useRef, useState } from 'react';
import { _DropdownContainer, _DropdownItem, _DropdownMenu } from './drop-down-core';
import { DropdownProps, ItemRequiredType } from './drop-down-types';
import Transition from 'components/transition/src/transition';
import { Button } from 'components/button';
import { useOnClickOutside } from 'hooks/useOutsideClick/useOutsideClick';

const Dropdown = <T extends ItemRequiredType>({
  items,
  position = 'auto',
  delay,
  isCloseOutsideClick = false,
  onSelect,
  children,
}: DropdownProps<T>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => setIsMenuOpen(!isMenuOpen);

  useOnClickOutside(dropdownRef, () => setIsMenuOpen(false), isCloseOutsideClick);

  return (
    <_DropdownContainer ref={dropdownRef}>
      <Button onClick={handleButtonClick}>Dropdown</Button>
      <Transition show={isMenuOpen} delay={Number(delay) || 0}>
        <_DropdownMenu position={position}>
          {children
            ? typeof children === 'function'
              ? children({ items })
              : children
            : items.map((item) => (
                <_DropdownItem onClick={() => onSelect(item)} key={item.id}>
                  {item.title}
                </_DropdownItem>
              ))}
        </_DropdownMenu>
      </Transition>
    </_DropdownContainer>
  );
};

Dropdown.displayName = 'DropDown';

export default Dropdown;
