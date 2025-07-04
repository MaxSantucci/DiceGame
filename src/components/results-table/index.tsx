"use client"

import React from 'react';
import { GameResult } from '@/types';
import { Conditions } from '@/enums';
import {
  Paper,
  Table,
  TableBody, TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  StyledTableCell,
  StyledTableCellColor,
  StyledTableCellRow
} from './styled';

interface Props {
  gameHistory: GameResult[];
}

const conditionMap: Record<Conditions, string> = {
  [Conditions.OVER]: 'Over',
  [Conditions.UNDER]: 'Under',
};

export const ResultsTable = ({ gameHistory }: Props) => {
  return (
    <TableContainer component={Paper} sx={{ width: 600, boxShadow: 'none' }}>
      <Table aria-label="results table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Guess</StyledTableCell>
            <StyledTableCell>Result</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameHistory.length ? gameHistory.map((game) => (
            <TableRow key={game.id}>
              <StyledTableCellRow>{game.time}</StyledTableCellRow>
              <StyledTableCellRow>{conditionMap[game.condition]} {game.threshold}
              </StyledTableCellRow>
              <StyledTableCellColor
                $isWin = {game.isWin}
              >
                {game.result}
              </StyledTableCellColor>
            </TableRow>
          )) : (<TableRow><TableCell colSpan={3} align={'center'}>No result</TableCell></TableRow>)
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};