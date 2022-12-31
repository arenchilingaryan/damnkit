import styled from 'styled-components';

export const _Button = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  font-size: 16px;
  cursor: pointer;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
`;
