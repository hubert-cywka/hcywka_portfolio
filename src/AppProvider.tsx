import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createTheme, darken, ThemeProvider } from '@mui/material';

interface AppProviderProps {
  children: ReactJSXElement | ReactJSXElement[];
}

const AppProvider = ({ children }: AppProviderProps) => {
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
              backgroundColor: '#7100fb',
              ':hover': { backgroundColor: darken('#7100fb', 0.15) }
            }
          }
        ]
      }
    }
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
