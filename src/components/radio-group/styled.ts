import {FormControlLabel, Radio, styled} from '@mui/material';

export const CustomRadio = styled(Radio)(({theme}) => ({
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

export const StyledFormControlLabel
  = styled(FormControlLabel)(({theme}) => ({
  fontSize: 16,
  fontWeight: 400,
  color: theme.palette.text.secondary,
  margin: '0',
  '.MuiFormControlLabel-label': { userSelect: 'none' },
  cursor: 'pointer',
}));

