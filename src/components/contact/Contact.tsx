import { Alert, Box, Divider, Snackbar } from '@mui/material';
import './Contact.scss';
import { Developer } from '../../types/interfaces/Developer';
import { useState } from 'react';
import { EMAIL_IMAGE, GITHUB_IMAGE, LINKEDIN_IMAGE } from '../../constants/ImageConstants';

const Contact = ({ name, role, linkedin, github, mail }: Developer) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleClose = () => {
    setIsAlertVisible(false);
  };

  const getTrimmedUrl = (url: string) => {
    return url.replace('https://', '');
  };

  const copyContactInfo = () => {
    const contactInfo = `${name} - ${role}\nEmail: ${mail}\nLinkedIn: ${linkedin}\nGitHub: ${github}`;
    window.navigator.clipboard.writeText(contactInfo).then(() => setIsAlertVisible(true));
  };

  return (
    <>
      <Box className="contact-container">
        <Box className="margin" />
        <Box sx={{ flexGrow: 1 }}>
          <Box className="name">{name}</Box>
          <Divider className="role">{role}</Divider>
          <Box component="a" target="_blank" href={linkedin} className="contact linkedin">
            <img src={LINKEDIN_IMAGE} className="contact-icon" />
            {getTrimmedUrl(linkedin)}
          </Box>
          <Box component="a" className="contact email" href={`mailto:${mail}`}>
            <img src={EMAIL_IMAGE} className="contact-icon" />
            {mail}
          </Box>
          <Box component="a" target="_blank" href={github} className="contact github">
            <img src={GITHUB_IMAGE} className="contact-icon" />
            {getTrimmedUrl(github)}
          </Box>
        </Box>
        <Box className="take-me" onClick={copyContactInfo}>
          TAKE ME
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        open={isAlertVisible}
        autoHideDuration={5000}
        onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Contact info saved to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
