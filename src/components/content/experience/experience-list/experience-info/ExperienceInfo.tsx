import { Box, Collapse, Typography } from '@mui/material';
import { Experience } from 'shared/types/interfaces/Experience';
import './ExperienceInfo.scss';
import ExperienceResponsibilities from '../experience-responsibilities/ExperienceResponsibilities';
import { memo, useState } from 'react';
import { KeyboardArrowDownRounded } from '@mui/icons-material';
import classNames from 'classnames';

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
    <Box component="section" className="experience-info-container">
      <Box component="section" className="experience-header">
        <Typography variant="caption" className="date">{`${since} - ${to}`}</Typography>
        <Box>
          <Typography className="company-name">{companyName}</Typography>
          <Typography className="position" variant="caption">
            {position}
          </Typography>
        </Box>
      </Box>
      {description?.length && (
        <Typography variant="caption" className="description">
          {description}
        </Typography>
      )}
      {responsibilities?.length && (
        <>
          <Box
            onClick={toggleResponsibilitiesVisibility}
            className="expand-button-container"
            aria-label="toggle-responsibilities-visibility-button">
            <Typography fontWeight={750} variant="caption">
              {areResponsibilitiesVisible ? 'Wow!' : 'See what I did!'}
            </Typography>
            <KeyboardArrowDownRounded
              className={classNames('expand-button', { collapse: areResponsibilitiesVisible })}
              sx={{ color: 'text.primary' }}
            />
          </Box>
          <Collapse in={areResponsibilitiesVisible}>
            <ExperienceResponsibilities responsibilities={responsibilities} />
          </Collapse>
        </>
      )}
    </Box>
  );
};

export default memo(ExperienceInfo);
