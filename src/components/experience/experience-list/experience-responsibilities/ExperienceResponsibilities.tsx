import './ExperienceResponsibilities.scss';
import { Box } from '@mui/material';

interface ExperienceResponsibilitiesProps {
  responsibilities: string[];
}

const ExperienceResponsibilities = ({ responsibilities }: ExperienceResponsibilitiesProps) => {
  return (
    <Box className="experience-responsibilities-container">
      <Box className="responsibilities-header">My responsibilities</Box>
      {responsibilities.map((responsibility, index) => {
        return (
          <Box className="responsibility" key={index}>
            {responsibility}
          </Box>
        );
      })}
    </Box>
  );
};

export default ExperienceResponsibilities;
