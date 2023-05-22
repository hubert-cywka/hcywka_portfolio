import { Box } from '@mui/material';
import { useMousePosition } from '../../utility/useMousePosition';
import './ParallaxBackground.scss';
import { useScrollPosition } from '../../utility/useScrollPosition';

const ParallaxBackground = () => {
  const scrollPosition = useScrollPosition();
  const mousePosition = useMousePosition();
  const scrollPercentageOffset = (scrollPosition / document.body.offsetHeight) * 10 - 5;
  const translateX = -(mousePosition.x / window.innerWidth) * 5 + 5;
  const translateY = -(mousePosition.y / window.innerHeight) * 5 + 5 - scrollPercentageOffset;
  const rotation = (mousePosition.x + mousePosition.y) % 3;

  const buildParallaxLayer = (modifier: number) => {
    return (
      <Box
        className="parallax-background"
        sx={{
          transform: `translateX(${translateX * modifier}%) translateY(${
            translateY * modifier
          }%) rotate(${rotation * modifier}deg)`
        }}
      />
    );
  };

  return (
    <>
      {buildParallaxLayer(1 / 2)}
      {buildParallaxLayer(1)}
      {buildParallaxLayer(1.5)}
    </>
  );
};

export default ParallaxBackground;
