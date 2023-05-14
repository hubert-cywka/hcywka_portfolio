import './ProjectPicture.scss';
import { Box } from '@mui/material';

interface ProjectPictureProps {
  imageSrc: string;
  name: string;
}

export const ProjectPicture = ({ imageSrc, name }: ProjectPictureProps) => {
  return (
    <Box className="project-picture-container">
      <img className="project-picture" src={imageSrc} alt={name} />
    </Box>
  );
};
