import React, { useState } from 'react';
import { _DropdownContainer, _DropdownItem, _DropdownMenu } from './drop-down-core';
import { DropdownProps } from './drop-down-types';
import Transition from 'components/transition/src/transition';
import { Button } from 'components/button';
import { OutsideClick } from 'components/outside-click';

const Dropdown: React.FC<DropdownProps> = ({ children, position = 'auto', delay }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <_DropdownContainer>
      <OutsideClick onOutsideClick={handleButtonClick}>
        <Button onClick={handleButtonClick}>Dropdown</Button>
        <Transition show={isMenuOpen} delay={Number(delay) || 0}>
          <_DropdownMenu position={position}>
            {children && React.Children.map(children, (child) => <_DropdownItem>{child}</_DropdownItem>)}
          </_DropdownMenu>
        </Transition>
      </OutsideClick>
    </_DropdownContainer>
  );
};

Dropdown.displayName = 'DropDown';

export default Dropdown;
