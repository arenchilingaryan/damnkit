import styled from 'styled-components';

export const _DragAndDropInput = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px dashed #000;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  padding: 16px;
  input {
    cursor: pointer;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
