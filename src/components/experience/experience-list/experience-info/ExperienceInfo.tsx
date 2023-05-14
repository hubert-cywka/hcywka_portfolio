import { Box } from '@mui/material';
import { Experience } from '../../../../types/interfaces/Experience';
import './ExperienceInfo.scss';

const ExperienceInfo = ({
  since,
  to,
  position,
  description,
  url,
  linkedin,
  logo,
  companyName
}: Experience) => {
  return (
    <Box className="experience-info-container">
      <Box className="experience-info-text">
        <Box className="additional-info">
          <Box className="position">{position}</Box>
          <Box className="date">
            {since} - {to}
          </Box>
        </Box>
        <Box className="company-name">{companyName}</Box>
        <Box className="description">{description}</Box>
        <Box className="company-buttons">
          <a target="_blank" href={url} rel="noreferrer">
            <img className="logo" src={logo} alt="Company website" />
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <img className="linkedin" src="linkedin.svg" alt="Company LinkedIn page" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperienceInfo;
