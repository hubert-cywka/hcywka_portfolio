import { Box, SxProps, Typography } from '@mui/material';
import './AboutDeveloper.scss';
import { Developer } from 'shared/types/Portfolio';
import { memo } from 'react';

interface AboutDeveloperProps extends Developer {
  sx?: SxProps;
}

const AboutDeveloper = ({ name, role, picture, contacts, sx }: AboutDeveloperProps) => {
  return (
    <Box component="article" className="about-developer-container" sx={sx}>
      <Box component="section" className="developer">
        <img className="picture" src={picture} alt="Picture of this website creator" />
        <Box className="text-container">
          <Typography className="role">{role}</Typography>
          <Typography className="name" variant="h3">
            {name}
          </Typography>
        </Box>
      </Box>

      <Box component="section" className="contacts">
        {contacts.map((contact) => (
          <a key={contact.name} href={contact.href} target="_blank" rel="noreferrer">
            <img className="contact-button" alt={contact.name} src={contact.img} />
          </a>
        ))}
      </Box>
      <Typography variant="caption" className="all-rights-reserved">
        {`HC. All rights reserved ©
        Feel free to contact me.`}
      </Typography>
    </Box>
  );
};

export default memo(AboutDeveloper);
