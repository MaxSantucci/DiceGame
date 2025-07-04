import React from 'react';

import {StyledDisplay} from '@/components/number-display/styled';

interface Props {
  gameResult: number | null;
}

export const NumberDisplay = ({ gameResult }: Props) => {
  return <StyledDisplay>{gameResult || '100 '}</StyledDisplay>;
};