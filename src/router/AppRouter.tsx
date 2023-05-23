import { createBrowserRouter, Outlet } from 'react-router-dom';
import LandingPage from '../pages/landing-page/LandingPage';

export const AppRouter = createBrowserRouter([
  { path: '/', element: <Outlet />, children: [{ path: '/', element: <LandingPage /> }] }
]);
