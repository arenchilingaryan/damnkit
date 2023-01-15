import styled from 'styled-components';

export const Loader = styled.span`
  border: 2px solid #fff;
  border-top-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: loadingSpinner 0.7s infinite linear;
  -webkit-animation: loadingSpinner 0.7s infinite linear;

  margin-top: -12px;
  margin-left: -12px;
  position: absolute;
  top: 50%;
  left: 50%;

  @keyframes loadingSpinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
