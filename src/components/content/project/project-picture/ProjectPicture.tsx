import './ProjectPicture.scss';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material';

interface ProjectPictureProps {
  imageSrc: string[];
  name: string;
}

export const ProjectPicture = ({ imageSrc, name }: ProjectPictureProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const incrementImageIndex = () => {
    setImageIndex((prev) => {
      if (prev + 1 >= imageSrc.length) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const decrementImageIndex = () => {
    setImageIndex((prev) => {
      if (prev <= 0) {
        return imageSrc.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <Box className="project-picture-container">
      <img className="project-picture" src={imageSrc[imageIndex]} alt={name} />
      <Box className="image-change-buttons">
        <IconButton onClick={decrementImageIndex} aria-label="previous picture button">
          <KeyboardArrowLeftRounded />
        </IconButton>
        <Typography variant="caption">{`${imageIndex + 1} / ${imageSrc.length}`}</Typography>
        <IconButton onClick={incrementImageIndex} aria-label="next picture button">
          <KeyboardArrowRightRounded />
        </IconButton>
      </Box>
    </Box>
  );
};
