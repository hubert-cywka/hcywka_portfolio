import './AboutMe.scss';
import { Box } from '@mui/material';

const AboutMe = () => {
  return (
    <Box className="about-me-container">
      <Box className="picture-container">
        <img className="picture" src="me.png" />
      </Box>
      <Box className="description">
        Hardworking and quick-learning programmer with basic knowledge of Java Spring Boot, eager to
        secure next entry-level frontend developer position. Ready to continue developing skills and
        help team achieve company goals.
      </Box>
    </Box>
  );
};

export default AboutMe;
