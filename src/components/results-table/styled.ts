import {styled, TableCell} from '@mui/material';

export const StyledTableCell
  = styled(TableCell)(({theme}) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
  fontSize: 14,
  borderBottom: '2px solid #f0f0f0'
}));

export const StyledTableCellRow
  = styled(TableCell)(({theme}) => ({
  padding: '6px 16px',
  borderBottom: '2px solid #f5f5f5',
  color: theme.palette.text.primary,
  fontSize: 14,
  fontWeight: 400
}));

export const StyledTableCellColor = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== '$isWin'})<{$isWin: boolean}>(({$isWin, theme}) => ({
  padding: '6px 16px',
  borderBottom: '2px solid #f5f5f5',
  color: $isWin ? theme.palette.success.main : theme.palette.error.main,
  fontSize: 14,
  fontWeight: 400,
}));

