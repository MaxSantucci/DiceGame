import {Button, styled} from '@mui/material';

export const StyledButton = styled(Button)(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  width: 320,
  height: 42,
  border: 'none',
  textAlign: 'center',
  borderRadius: '8px',
  fontSize: 15,
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  marginBottom: '40px',
  letterSpacing: '1px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  }
}));