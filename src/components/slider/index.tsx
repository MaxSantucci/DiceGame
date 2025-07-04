import React from 'react';

import {
  SliderContainer,
  SliderLabels,
  StyledSlider
} from './styled';

interface Props {
  threshold: number,
  setThreshold: (threshold: number) => void;
}

export const ProgressBar = ({threshold, setThreshold}: Props) => {

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setThreshold(newValue as number);
  };

  return (
    <SliderContainer>
      <StyledSlider
        value={threshold}
        onChange={handleSliderChange}
        min={0}
        max={100}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => value.toString()}
        marks={[
          { value: 0, label: '' },
          { value: 25, label: '' },
          { value: 50, label: '' },
          { value: 75, label: '' },
          { value: 100, label: '' },
        ]}
      />
      <SliderLabels>
        <span>0</span>
        <span>100</span>
      </SliderLabels>
    </SliderContainer>
  );
};