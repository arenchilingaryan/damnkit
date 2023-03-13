import styled from 'styled-components';

export const _Input = styled.input`
  box-sizing: border-box;
  position: relative;
  background: #ffffff;
  color: #000000;
  width: 100%;
  padding: 5px 8px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  &:active {
    border-color: #646464;
  }
  &:focus {
    border-color: #646464;
  }
  &:focus-visible {
    outline: none;
    border-color: #646464;
  }
`;
