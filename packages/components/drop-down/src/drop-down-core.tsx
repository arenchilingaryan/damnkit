import styled, { css } from 'styled-components';
import { DropdownMenuProps } from './drop-down-types';

export const _DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const _DropdownMenu = styled.ul<DropdownMenuProps>`
  box-sizing: border-box;
  width: 100%;
  list-style-type: none;
  padding: 8px;
  margin: 0;
  position: absolute;
  z-index: 1;
  border-radius: 3px;

  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.05), 0 8px 10px 1px rgba(0, 0, 0, 0.06), 0 5px 5px -3px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.position === 'top' &&
    css`
      bottom: 100%;
    `}

  ${(props) =>
    props.position === 'bottom' &&
    css`
      top: 100%;
    `}

  ${(props) =>
    props.position === 'auto' &&
    css`
      top: 100%;
      ${(props) =>
        props.theme.windowWidth < 768 &&
        css`
          top: auto;
          bottom: 100%;
        `}
    `}
`;

export const _DropdownItem = styled.li`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  color: black;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #0052d9;
    background: #ecf2fe;
  }
`;
