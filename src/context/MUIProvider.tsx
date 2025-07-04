'use client';

import {createTheme, ThemeProvider, alpha} from '@mui/material/styles';
import {purple, red, grey} from '@mui/material/colors';

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    transparent?: string;
  }
  interface SimplePaletteColorOptions {
    transparent?: string;
  }
  interface Palette {
    customGrey: Palette['grey'];
  }
  interface PaletteOptions {
    customGrey: PaletteOptions['grey'];
  }
  interface TypeBackground {
    subtle?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      transparent: alpha(purple[500], 0.25),
    },
    secondary: {
      main: red[500],
    },
    text: {
      primary: '#000000DE', // колір основного тексту (чорний з 87% непрозорості)
      secondary: alpha('#000000', 0.6),
    },
    background: {
      default: grey[100],
      paper: '#fff',
      subtle: '#0000000a',
    },
    customGrey: {
      '600': '#6b7280',
    },
    success: {
      main: '#1B5E20', // Темно-зелений для успішних дій
    },
    error: {
      main: '#C62828', // Темно-червоний для помилок
    },
  },
});

export default function MUIProvider({children}: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
