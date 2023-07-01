import { Box, Typography } from '@mui/material';
import './SkillBadge.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Skill } from 'shared/types/interfaces/Skill';

interface SkillBadgeProps {
  skill: Skill;
  className?: string;
}

const SkillBadge = ({ skill, className }: SkillBadgeProps) => {
  const getSkillLevel = () => {
    if (skill.level === undefined) return;
    const skillLevelDots: ReactJSXElement[] = [];
    for (let iterator = 1; iterator <= 5; iterator++) {
      skillLevelDots.push(
        <Box
          key={iterator}
          className={`skill-level-dot ${skill.level >= iterator ? 'on' : 'off'}`}
        />
      );
    }
    return skillLevelDots;
  };

  return (
    <Box className={`skill-badge-container ${className ?? ''}`}>
      <img className="badge-icon" src={skill.img} alt={skill.name} />
      <Typography color="text.primary" className="badge-name">
        {skill.name}
      </Typography>
      {skill.level !== undefined && <Box className="skill-level">{getSkillLevel()}</Box>}
    </Box>
  );
};

export default SkillBadge;
