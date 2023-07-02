import './ExperienceResponsibilities.scss';
import { Box, Typography } from '@mui/material';

interface ExperienceResponsibilitiesProps {
  responsibilities: string[];
}

const ExperienceResponsibilities = ({ responsibilities }: ExperienceResponsibilitiesProps) => {
  return (
    <Box component="ol" className="experience-responsibilities-container">
      {responsibilities.map((responsibility) => {
        return (
          <Typography
            variant="caption"
            component="li"
            className="responsibility"
            key={responsibility}>
            {responsibility}
          </Typography>
        );
      })}
    </Box>
  );
};

export default ExperienceResponsibilities;
