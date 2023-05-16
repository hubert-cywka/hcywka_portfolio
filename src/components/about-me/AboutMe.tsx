import { Box, Typography } from '@mui/material';
import './AboutMe.scss';
import { Developer } from '../../types/interfaces/Developer';
import { EMAIL_IMAGE, GITHUB_IMAGE, LINKEDIN_IMAGE } from '../../constants/ImageConstants';

const AboutMe = ({ name, role, picture, mail, github, linkedin }: Developer) => {
  const getFirstName = () => {
    return name.slice(0, name.indexOf(' '));
  };

  const getLastName = () => {
    return name.slice(name.indexOf(' '));
  };

  return (
    <Box className="about-me">
      <Box className="me">
        <img className="picture" src={picture} alt="Picture of this website creator" />
        <Box className="text-container">
          <Typography className="role">{role}</Typography>
          <Typography className="header-text first-name">{getFirstName()}</Typography>
          <Typography className="header-text last-name">{getLastName()}</Typography>
        </Box>
      </Box>
      <Box className="socials">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <img className="social-button" src={LINKEDIN_IMAGE} />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <img className="social-button" src={GITHUB_IMAGE} />
        </a>
        <a href={`mailto:${mail}`} target="_blank" rel="noreferrer">
          <img className="social-button" src={EMAIL_IMAGE} />
        </a>
      </Box>
      <Typography variant="caption" className="all-rights-reserved">
        HC. All rights reserved ©
      </Typography>
    </Box>
  );
};

export default AboutMe;
