import { Box } from '@mui/material';
import { RefObject } from 'react';
import './Navbar.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

export interface NavbarItem {
  ref: RefObject<HTMLDivElement>;
  icon: ReactJSXElement;
}

interface NavbarProps {
  items: NavbarItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  const scrollTo = (element: HTMLDivElement | null) => {
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const buildItems = () => {
    return items.map((item, index) => {
      return (
        <Box className="navbar-item" onClick={() => scrollTo(item.ref?.current)} key={index}>
          {item.icon}
        </Box>
      );
    });
  };

  return <Box className="navbar-container">{buildItems()}</Box>;
};

export default Navbar;
