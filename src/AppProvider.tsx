import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createTheme, ThemeProvider } from '@mui/material';

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
      mode: 'light',
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
    }
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
