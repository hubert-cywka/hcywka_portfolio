import { Box, Button, Grid, Typography } from '@mui/material';
import './ProjectContainer.scss';
import { Project } from '../../../types/interfaces/Project';
import Description from '../../description/Description';
import { ProjectPicture } from '../project-picture/ProjectPicture';
import { useRef } from 'react';
import { useIntersection } from '../../../utility/useIntersection';

const ProjectContainer = ({ name, description, url, github, imageSrc }: Project) => {
  const projectNameRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(projectNameRef, '-150px');

  return (
    <Grid item xs={12} className="project-container">
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <Box
            className="project-name"
            ref={projectNameRef}
            sx={{
              backgroundPosition: isVisible ? 'left' : 'right',
              paddingLeft: isVisible ? '30px' : '15px'
            }}>
            <Typography variant="h5" fontWeight="bold">
              {name}
            </Typography>
          </Box>
          <Description description={description} />
          <Box className="buttons-container">
            <Button
              component="a"
              href={url}
              target="_blank"
              variant="contained"
              className="redirect-button">
              See website
            </Button>
            <Button
              component="a"
              href={github}
              target="_blank"
              variant="contained"
              className="redirect-button">
              GitHub
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} alignItems="center">
          <ProjectPicture imageSrc={imageSrc} name={name} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectContainer;
