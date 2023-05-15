import { Box, Typography } from '@mui/material';
import './SkillBadge.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface SkillBadgeProps {
  imageSrc: string;
  name: string;
  level: number;
}

const SkillBadge = ({ imageSrc, name, level }: SkillBadgeProps) => {
  const getSkillLevel = () => {
    const skillLevelDots: ReactJSXElement[] = [];
    for (let iterator = 1; iterator <= 5; iterator++) {
      skillLevelDots.push(
        <Box className={`skill-level-dot ${level >= iterator ? 'on' : 'off'}`} />
      );
    }
    return skillLevelDots;
  };

  return (
    <Box className="skill-badge-container">
      <img className="badge-icon" src={imageSrc} alt={name} />
      <Typography color="text.primary" className="badge-name">
        {name}
      </Typography>
      <Box className="skill-level">{getSkillLevel()}</Box>
    </Box>
  );
};

export default SkillBadge;
