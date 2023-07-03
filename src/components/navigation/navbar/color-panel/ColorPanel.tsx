import { Box, ClickAwayListener, Collapse } from '@mui/material';
import './ColorPanel.scss';
import { ComponentProps, SyntheticEvent, useContext, useState } from 'react';
import classNames from 'classnames';
import { PrimaryColorContext } from '../../../../shared/contexts/PrimaryColorContext';
import { Settings } from '@mui/icons-material';
import { useWindowSize } from '../../../../shared/hooks/useWindowResize';
import { MD_BREAKPOINT } from '../../../../pages/landing-page/LandingPage';

interface ColorPanelProps extends ComponentProps<'div'> {
  colors: string[];
}

const ColorPanel = ({ colors, className }: ColorPanelProps) => {
  const [windowWidth] = useWindowSize();
  const { primaryColor, setPrimaryColor } = useContext(PrimaryColorContext);
  const [isColorPanelVisible, setIsColorPanelVisible] = useState(false);

  const toggleColorPanelVisibility = () => {
    setIsColorPanelVisible((prev) => !prev);
  };

  const handleColorSelection = (e: SyntheticEvent, color: string) => {
    e.stopPropagation();
    setPrimaryColor(color);
  };

  const buildColorSelectors = () => {
    return colors.map((color) => (
      <Box
        className={classNames('color-selector', { active: primaryColor === color })}
        key={color}
        sx={{ backgroundColor: color }}
        onClick={(e) => handleColorSelection(e, color)}
      />
    ));
  };

  return (
    <ClickAwayListener onClickAway={() => setIsColorPanelVisible(false)}>
      <Box
        className={classNames('color-panel', { active: isColorPanelVisible }, className)}
        onClick={toggleColorPanelVisibility}>
        <Settings />
        <Collapse
          in={isColorPanelVisible}
          orientation={windowWidth >= MD_BREAKPOINT ? 'vertical' : 'horizontal'}>
          <Box className="colors">{buildColorSelectors()}</Box>
        </Collapse>
      </Box>
    </ClickAwayListener>
  );
};

export default ColorPanel;
