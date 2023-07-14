import { Box, Button, Grid, Typography } from '@mui/material';
import './ProjectContainer.scss';
import { Project } from 'shared/types/Portfolio';
import Description from 'components/content/description/Description';
import ProjectPicture from '../project-picture/ProjectPicture';
import { memo, useRef } from 'react';
import { useIntersection } from 'shared/hooks/useIntersection';
import classNames from 'classnames';
import { useSlideInProps } from 'shared/hooks/useSlideInProps';
import { useAppearance } from 'shared/hooks/useAppearance';

const APPEAR_THRESHOLD = '-150px';

const ProjectContainer = ({
  name,
  description,
  url,
  uiGithub,
  backendGithub,
  imageSrc
}: Project) => {
  const projectNameRef = useRef<HTMLElement>(null);
  const isVisible = useIntersection(projectNameRef, APPEAR_THRESHOLD);
  const shouldSlideIn = useAppearance(projectNameRef, APPEAR_THRESHOLD);
  const pictureSlideInProps = useSlideInProps(shouldSlideIn, 'RIGHT');

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
            {url && (
              <Button
                component="a"
                aria-label="show live project"
                href={url}
                target="_blank"
                variant="contained"
                className="redirect-button">
                See website
              </Button>
            )}
            <Button
              component="a"
              aria-label="show project frontend repository"
              href={uiGithub}
              target="_blank"
              variant="contained"
              className="redirect-button">
              GitHub - UI
            </Button>
            {backendGithub && (
              <Button
                component="a"
                aria-label="show project backend repository"
                href={backendGithub}
                target="_blank"
                variant="contained"
                className="redirect-button">
                GitHub - Backend
              </Button>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} alignItems="center">
          <ProjectPicture imageSrc={imageSrc} name={name} sx={pictureSlideInProps} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(ProjectContainer);
