import { PropsWithChildren } from 'react';
import { Box, SxProps } from '@mui/material';

type SlideDirection = 'LEFT' | 'RIGHT';

interface SlideInWrapperProps {
  isIn: boolean;
  direction?: SlideDirection;
}

const SlideInWrapper = ({ isIn, direction, children }: PropsWithChildren<SlideInWrapperProps>) => {
  const getSlideInProps = (shouldSlideIn: boolean, direction?: SlideDirection): SxProps => {
    const slideValue = direction === 'LEFT' ? '-50%' : '50%';
    return {
      transform: `translateX(${shouldSlideIn ? 0 : slideValue}) scale(${shouldSlideIn ? 1 : 0.7})`,
      opacity: shouldSlideIn ? 1 : 0,
      transition:
        'transform 0.8s 0.2s cubic-bezier(0.015, 0.620, 0.250, 1.000), opacity 0.8s 0.2s ease-in-out'
    };
  };

  return <Box sx={getSlideInProps(isIn, direction)}>{children}</Box>;
};

export default SlideInWrapper;
