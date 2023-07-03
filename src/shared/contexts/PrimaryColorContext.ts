import { createContext } from 'react';

export const PrimaryColorContext = createContext(
  {} as { setPrimaryColor: (value: string) => void; primaryColor: string } // eslint-disable-line no-unused-vars
);
