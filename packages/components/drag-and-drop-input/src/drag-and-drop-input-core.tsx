import styled from 'styled-components';

export const _DragAndDropInput = styled.div<{ filesLength: number }>`
  position: relative;
  border: ${(props) => (props.filesLength === 0 ? '1px dashed rgba(0, 0, 0, 0.1)' : '1px dashed #BCEBDC')};
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  height: 100%;
  overflow-y: scroll;
  input {
    cursor: pointer;
  }

  &:hover {
    background-color: ${(props) => (props.filesLength === 0 ? 'rgba(0, 0, 0, 0.05)' : 'rgba(188, 235, 220, .2)')};
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #5e5e5e;
  }

  ::-webkit-scrollbar-button {
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
`;

export const _DragAndDropCell = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-basis: calc(100% - 8px);
  margin: 0 8px;
  @media (min-width: 678px) {
    flex-basis: calc(50% - 8px);
  }
  @media (min-width: 1024px) {
    flex-basis: calc(33% - 8px);
  }
`;

export const DragAndDropImage = styled.img`
  min-width: 300px;
  flex-basis: calc(100% - 8px);
  height: 500px;
  margin: 4px;
  @media (min-width: 678px) {
    flex-basis: calc(50% - 8px);
    height: 400px;
  }
  @media (min-width: 1024px) {
    flex-basis: calc(33% - 8px);
    height: 500px;
  }
`;

export const _DragAndDropContentHeader = styled.h1`
  display: flex;
  justify-content: center;
  padding: 8px;
`;
