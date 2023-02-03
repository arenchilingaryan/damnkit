import styled from 'styled-components';

export const _Button = styled.button`
  position: relative;
  background: #0052d9;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const _ButtonContent = styled.span<{ isHide: boolean }>`
  opacity: ${(props) => (props.isHide ? 0 : 1)};
`;
