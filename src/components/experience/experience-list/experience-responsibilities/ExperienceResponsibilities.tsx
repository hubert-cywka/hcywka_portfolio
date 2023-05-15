import './ExperienceResponsibilities.scss';
import { Box, Typography } from '@mui/material';

interface ExperienceResponsibilitiesProps {
  responsibilities: string[];
}

const ExperienceResponsibilities = ({ responsibilities }: ExperienceResponsibilitiesProps) => {
  return (
    <Box className="experience-responsibilities-container">
      {responsibilities.map((responsibility, index) => {
        return (
          <Typography variant="caption" className="responsibility" key={index}>
            {responsibility}
          </Typography>
        );
      })}
    </Box>
  );
};

export default ExperienceResponsibilities;
