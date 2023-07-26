import { Box, IconButton, Typography } from '@mui/material';
import { KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material';
import { ComponentProps, Dispatch, memo, SetStateAction } from 'react';

interface PictureChangeButtonsProps extends Omit<ComponentProps<'div'>, 'onChange'> {
  onChange: Dispatch<SetStateAction<number>>;
  currentIndex: number;
  picturesCount: number;
}

const PictureChangeButtons = ({
  onChange,
  picturesCount,
  currentIndex,
  className
}: PictureChangeButtonsProps) => {
  const incrementImageIndex = () => {
    onChange((prev) => {
      if (prev + 1 >= picturesCount) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const decrementImageIndex = () => {
    onChange((prev) => {
      if (prev <= 0) {
        return picturesCount - 1;
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <Box className={className}>
      <IconButton onClick={decrementImageIndex} aria-label="previous picture button">
        <KeyboardArrowLeftRounded />
      </IconButton>
      <Typography variant="caption">{`${currentIndex + 1} / ${picturesCount}`}</Typography>
      <IconButton onClick={incrementImageIndex} aria-label="next picture button">
        <KeyboardArrowRightRounded />
      </IconButton>
    </Box>
  );
};

export default memo(PictureChangeButtons);
