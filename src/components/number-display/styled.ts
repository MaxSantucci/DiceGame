import {styled} from '@mui/material';

export const StyledDisplay = styled('div')(({theme}) => ({
  display: 'grid',
  placeItems: 'center',
  margin: '0 auto 16px auto',
  fontSize: '96px',
  width: '320px',
  height: '200px',
  fontWeight: '300',
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.subtle,
  lineHeight: '1.17',
}));