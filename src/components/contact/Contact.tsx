import { Box, Divider } from '@mui/material';
import './Contact.scss';

const Contact = () => {
  return (
    <Box className="contact-container">
      <Box className="margin" />
      <Box sx={{ flexGrow: 1 }}>
        <Box className="name">HUBERT CYWKA</Box>
        <Divider className="role">React Developer</Divider>
        <Box
          component="a"
          target="_blank"
          href="https://linkedin.com/in/hubert-cywka"
          className="contact linkedin">
          <img src="linkedin.svg" className="contact-icon" /> linkedin.com/in/hubert-cywka
        </Box>
        <Box component="a" className="contact email" href={`mailto:${`hcywka@gmail.com`}`}>
          <img src="mail.svg" className="contact-icon" />
          hcywka@gmail.com
        </Box>
        <Box
          component="a"
          target="_blank"
          href="https://github.com/hejs22"
          className="contact github">
          <img src="github.svg" className="contact-icon" />
          github.com/hejs22
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
