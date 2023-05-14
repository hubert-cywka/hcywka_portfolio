import AppProvider from './AppProvider';
import { Container } from '@mui/material';
import { RouterProvider } from 'react-router';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <AppProvider>
      <Container maxWidth="lg">
        <RouterProvider router={AppRouter} />
      </Container>
    </AppProvider>
  );
}

export default App;
