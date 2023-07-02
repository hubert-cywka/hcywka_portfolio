import { Box, Button, Grid, Typography } from '@mui/material';
import './ProjectContainer.scss';
import { Project } from 'shared/types/interfaces/Project';
import Description from 'components/content/description/Description';
import ProjectPicture from '../project-picture/ProjectPicture';
import { memo, useRef } from 'react';
import { useIntersection } from 'shared/hooks/useIntersection';
import classNames from 'classnames';

const ProjectContainer = ({ name, description, url, github, imageSrc }: Project) => {
  const projectNameRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(projectNameRef, '-150px');

  return (
    <Grid component="article" item xs={12} className="project-container">
      <Grid container alignItems="center">
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="h5"
            fontWeight="bold"
            className={classNames('project-name', { highlighted: isVisible })}
            ref={projectNameRef}>
            {name}
          </Typography>
          <Description description={description} />
          <Box component="section" className="buttons-container">
            <Button
              component="a"
              aria-label="show live project"
              href={url}
              target="_blank"
              variant="contained"
              className="redirect-button">
              See website
            </Button>
            <Button
              component="a"
              aria-label="show project repository"
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

export default memo(ProjectContainer);
