import {styled, Slider} from '@mui/material';

export const SliderContainer = styled('div')(({}) => ({
  width: 320,
  margin: '0 auto 16px auto',
  textAlign: 'center',
}));

export const SliderLabels = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '14px',
  lineHeight: 1.43,
  color: theme.palette.text.secondary,
}));

export const StyledSlider = styled(Slider)(({theme}) => ({
  color: theme.palette.primary.main,
  height: 2,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiSlider-rail': {
    backgroundColor: theme.palette.primary.transparent,
    opacity: 1,
  },
  '& .MuiSlider-thumb': {
    height: 12,
    width: 12,
    backgroundColor: theme.palette.primary.main,
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 32,
      height: 32,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.transparent,
      pointerEvents: 'none',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    width: 40,
    height: 30,
    backgroundColor: theme.palette.customGrey['600'],
    color: theme.palette.background.paper,
    fontSize: 14,
    fontWeight: 600,
    padding: '6px 12px',
    borderRadius: 2,
    transform: 'translateY(-110%) scale(1) !important',
    '&:before': {
      display: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -6,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '6px solid #6b7280',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.background.paper,
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: theme.palette.primary.main,
    height: 2,
    width: 2,
    borderRadius: '50%',
    '&.MuiSlider-markActive': {
      backgroundColor: theme.palette.primary.transparent,
    },
  },
}));