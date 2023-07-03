import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createTheme, ThemeProvider } from '@mui/material';
import { updateGlobalColors } from './shared/utils/updateGlobalColors';
import { COLORS } from './shared/constants/Colors';
import { PrimaryColorContext } from './shared/contexts/PrimaryColorContext';
import { memo, useEffect, useState } from 'react';

interface AppProviderProps {
  children: ReactJSXElement | ReactJSXElement[];
}

const INITIAL_COLOR = COLORS[0];

const AppProvider = ({ children }: AppProviderProps) => {
  const [primaryColor, setPrimaryColor] = useState(INITIAL_COLOR);

  useEffect(() => {
    updateGlobalColors(INITIAL_COLOR);
  }, []);

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Montserrat'
      }
    },
    palette: {
      mode: 'dark',
      primary: {
        main: '#100037',
        light: '#2D0C6E',
        dark: '#0F0425'
      },
      secondary: {
        main: '#252525'
      },
      text: {
        primary: '#ffffff',
        secondary: '#222222'
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none'
          }
        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: '#ffffff',
              backgroundColor: 'var(--primary)',
              ':hover': { backgroundColor: 'var(--primary-dark)' }
            }
          },
          {
            props: { variant: 'outlined' },
            style: {
              color: '#ffffff',
              borderColor: 'var(--primary)',
              borderRadius: '100px',
              ':hover': { borderColor: 'var(--primary-dark)' }
            }
          }
        ]
      }
    }
  });

  const handleColorChange = (color: string) => {
    updateGlobalColors(color);
    setPrimaryColor(color);
  };

  return (
    <PrimaryColorContext.Provider value={{ primaryColor, setPrimaryColor: handleColorChange }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PrimaryColorContext.Provider>
  );
};

export default memo(AppProvider);
