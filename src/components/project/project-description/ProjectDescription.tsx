import { Box, Button } from '@mui/material';
import { PropsWithChildren } from 'react';
import './ProjectDescription.scss';

interface ProjectDescriptionProps {
  name: string;
  url: string;
  github: string;
}

const ProjectDescription = ({
  name,
  url,
  children,
  github
}: PropsWithChildren<ProjectDescriptionProps>) => {
  return (
    <Box className="project-description-container">
      <Box className="project-name">{name}</Box>
      <Box className="project-description">{children}</Box>
      <a href={github} target="_blank" rel="noreferrer">
        <img src="github.svg" className="github-link" />
      </a>
      <Button component="a" variant="contained" href={url} target="_blank" className="project-link">
        SHOW ME!
      </Button>
    </Box>
  );
};

export default ProjectDescription;
