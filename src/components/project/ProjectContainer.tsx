import { Box, Grid } from '@mui/material';
import { ProjectPicture } from './project-picture/ProjectPicture';
import ProjectDescription from './project-description/ProjectDescription';
import { PropsWithChildren, useEffect, useState } from 'react';
import './ProjectContainer.scss';
import { Project } from '../../types/interfaces/Project';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const ProjectContainer = ({
  imageSrc,
  name,
  url,
  children,
  github
}: PropsWithChildren<Project>) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const incrementImageIndex = () => {
    setImageIndex((prev) => {
      if (prev + 1 === imageSrc.length) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlay) incrementImageIndex();
    }, 2500);

    return () => clearInterval(interval);
  });

  const getImageChangeBoxes = () => {
    return imageSrc.map((_image, index) => {
      return (
        <Box
          className={`image-change-button ${imageIndex === index ? 'active' : ''}`}
          key={index}
          onClick={() => setImageIndex(index)}>
          {index + 1}
        </Box>
      );
    });
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay((prev) => !prev);
  };

  return (
    <Grid item xs={12} className="project-container">
      <Box className="buttons-container">
        <PlayArrowRoundedIcon
          onClick={toggleAutoPlay}
          className={`image-change-button ${isAutoPlay ? 'active' : ''}`}
        />
        {getImageChangeBoxes()}
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <ProjectPicture imageSrc={imageSrc[imageIndex]} name={name} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex' }}>
          <ProjectDescription name={name} url={url} github={github}>
            {children}
          </ProjectDescription>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectContainer;
