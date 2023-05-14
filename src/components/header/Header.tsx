import { Box } from '@mui/material';
import './Header.scss';

const Header = () => {
  return (
    <Box className="header">
      <Box className="role" sx={{ color: 'text.secondary' }}>
        REACT DEVELOPER
      </Box>
      <Box className="header-text first-name">HUBERT</Box>
      <Box className="header-text last-name">CYWKA</Box>
    </Box>
  );
};

export default Header;
