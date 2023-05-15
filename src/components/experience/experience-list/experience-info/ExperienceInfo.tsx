import { Box, Collapse, IconButton, Typography } from '@mui/material';
import { Experience } from '../../../../types/interfaces/Experience';
import './ExperienceInfo.scss';
import ExperienceResponsibilities from '../experience-responsibilities/ExperienceResponsibilities';
import { useState } from 'react';
import { KeyboardArrowDownRounded } from '@mui/icons-material';

const ExperienceInfo = ({
  since,
  to,
  position,
  companyName,
  description,
  responsibilities
}: Experience) => {
  const [areResponsibilitiesVisible, setAreResponsibilitiesVisible] = useState(false);
  const toggleResponsibilitiesVisibility = () => {
    setAreResponsibilitiesVisible((prev) => !prev);
  };

  return (
    <Box className="experience-info-container">
      <Typography variant="caption" className="date">{`${since} - ${to}`}</Typography>
      <Typography variant="h6" className="company-name">
        {companyName}
      </Typography>
      <Typography variant="subtitle2" className="position">
        {position}
      </Typography>
      <Typography variant="caption" className="description">
        {description}
      </Typography>
      {responsibilities?.length && (
        <>
          <Box>
            <Typography variant="caption">Responsibilities</Typography>
            <IconButton sx={{ color: 'text.primary' }} onClick={toggleResponsibilitiesVisibility}>
              <KeyboardArrowDownRounded
                className={`expand-button ${areResponsibilitiesVisible ? 'collapse' : ''}`}
              />
            </IconButton>
          </Box>
          <Collapse in={areResponsibilitiesVisible}>
            <ExperienceResponsibilities responsibilities={responsibilities} />
          </Collapse>
        </>
      )}
    </Box>
  );
};

export default ExperienceInfo;
