import React from 'react';
import styled from 'styled-components';

const ButtonTest = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => props.theme.primary};
  color: ${(props) => (props.theme ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Button: React.FC = () => {
  return (
    <div>
      <ButtonTest>Normal</ButtonTest>
      <ButtonTest>Primary</ButtonTest>
    </div>
  );
};
