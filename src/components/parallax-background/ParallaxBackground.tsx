import { Box } from '@mui/material';
import { useMousePosition } from '../../utility/useMousePosition';
import './ParallaxBackground.scss';

const ParallaxBackground = () => {
  const mousePosition = useMousePosition();
  const translateX = (mousePosition.x / window.innerWidth) * 5 - 5;
  const translateY = (mousePosition.y / window.innerHeight) * 5 - 5;
  const rotation = (mousePosition.x + mousePosition.y) % 3;

  return (
    <>
      <Box
        className="parallax-background first"
        sx={{
          transform: `translateX(${translateX / 2}%) translateY(${translateY / 2}%) rotate(${
            rotation / 2
          }deg)`
        }}
      />
      <Box
        className="parallax-background second"
        sx={{
          transform: `translateX(${translateX}%) translateY(${translateY}%) rotate(${rotation}deg)`
        }}
      />
      <Box
        className="parallax-background third"
        sx={{
          transform: `translateX(${translateX * 1.5}%) translateY(${translateY * 1.5}%) rotate(${
            rotation * 1.5
          }deg)`
        }}
      />
    </>
  );
};

export default ParallaxBackground;
