import { Box, Typography } from '@mui/material';
import './ProjectDescription.scss';

interface ProjectDescriptionProps {
  description: string[];
}

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  return (
    <Box className="project-description-container">
      {description?.map((paragraph, index) => (
        <Typography variant="caption" key={index} className="project-description-paragraph">
          {paragraph}
        </Typography>
      ))}
    </Box>
  );
};

export default ProjectDescription;
