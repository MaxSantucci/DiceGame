import React from 'react';
import {StyledButton} from './styled';

interface Props {
  playGame: () => void;
}

export const ButtonPlay = ({playGame}: Props) => {
  return (
    <StyledButton
      onClick={playGame}
      variant="contained"
      disableElevation
    >
      PLAY
    </StyledButton>
  );
};
