import { alpha, darken, lighten } from '@mui/material';

export const updateGlobalColors = (color: string) => {
  document.documentElement.style.setProperty('--primary', color);
  document.documentElement.style.setProperty('--primary-dark', darken(color, 0.2));
  document.documentElement.style.setProperty('--primary-light', lighten(color, 0.1));
  document.documentElement.style.setProperty('--primary-semi-transparent', alpha(color, 0.5));
  document.documentElement.style.setProperty('--primary-transparent', alpha(color, 0.15));
};
