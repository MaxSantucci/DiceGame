import React from 'react';
import {
  FormControl,
  RadioGroup as MuiRadioGroup,
} from '@mui/material';
import {Conditions} from '@/enums';
import {
  CustomRadio,
  StyledFormControlLabel
} from './styled';

interface Props {
  condition: Conditions
  setCondition: (condition: Conditions) => void;
}

export const RadioGroup = ({condition, setCondition}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCondition(event.target.value as Conditions);
  };

  return (
    <FormControl component="fieldset" sx={{ width: 320, margin: '0 auto 32px auto' }}>
      <MuiRadioGroup
        row
        name="condition"
        value={condition}
        onChange={handleChange}
        sx={{ justifyContent: 'center', gap: 2 }}
      >
        <StyledFormControlLabel
          value="under"
          control={<CustomRadio />}
          label="Under"
          labelPlacement="start"
        />
        <StyledFormControlLabel
          value="over"
          control={<CustomRadio />}
          label="Over"
          labelPlacement="start"
        />
      </MuiRadioGroup>
    </FormControl>
  );
};
