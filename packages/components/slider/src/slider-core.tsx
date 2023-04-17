import styled from 'styled-components';

export const _SliderContainer = styled.div`
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;

export const _Slider = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  scroll-snap-type: x mandatory;
  -ms-scroll-snap-type: mandatory;
  -webkit-overflow-scrolling: touch;
`;

export const _SliderItemWrapper = styled.div`
  flex: 0 0 auto;
  width: 90%;
  scroll-snap-align: center;
  -ms-scroll-snap-align: center;

  @media (min-width: 664px) {
    width: 300px;
  }
`;
