import React from 'react';
import { _Slider, _SliderContainer, _SliderItemWrapper } from './slider-core';
import { SliderProps } from './slider-types';

const Slider = ({ children, wrapperClassName, sliderClassName, itemWrapperClassName }: SliderProps) => {
  return (
    <_SliderContainer role="row" aria-label="row" className={wrapperClassName}>
      <_Slider role="slider" aria-label="slider" className={sliderClassName}>
        {React.Children.map(children, (child) => (
          <_SliderItemWrapper className={itemWrapperClassName}>{child}</_SliderItemWrapper>
        ))}
      </_Slider>
    </_SliderContainer>
  );
};

export default Slider;
