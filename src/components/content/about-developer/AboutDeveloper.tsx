import { Box, SxProps, Typography } from '@mui/material';
import './AboutDeveloper.scss';
import { Developer } from 'shared/types/interfaces/Developer';

interface AboutDeveloperProps extends Developer {
  sx?: SxProps;
}

const AboutDeveloper = ({ name, role, picture, contacts, sx }: AboutDeveloperProps) => {
  return (
    <Box className="about-developer-container" sx={sx}>
      <Box className="developer">
        <img className="picture" src={picture} alt="Picture of this website creator" />
        <Box className="text-container">
          <Typography className="role">{role}</Typography>
          <Typography className="name">{name}</Typography>
        </Box>
      </Box>
      <Box className="contacts">
        {contacts.map((contact) => (
          <a key={contact.name} href={contact.href} target="_blank" rel="noreferrer">
            <img className="contact-button" alt={contact.name} src={contact.img} />
          </a>
        ))}
      </Box>
      <Typography variant="caption" className="all-rights-reserved">
        HC. All rights reserved ©
      </Typography>
    </Box>
  );
};

export default AboutDeveloper;
