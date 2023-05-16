import AppProvider from './AppProvider';
import { Container } from '@mui/material';
import { RouterProvider } from 'react-router';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <AppProvider>
      <Container maxWidth="xl" sx={{ overflowX: 'hidden' }}>
        <RouterProvider router={AppRouter} />
      </Container>
    </AppProvider>
  );
}

export default App;
