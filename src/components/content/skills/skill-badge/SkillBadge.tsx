import { Box, Typography } from '@mui/material';
import './SkillBadge.scss';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Skill } from 'shared/types/interfaces/Skill';
import classNames from 'classnames';

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
          className={classNames('skill-level-dot', { highlighted: skill.level >= iterator })}
        />
      );
    }
    return skillLevelDots;
  };

  return (
    <Box className={classNames('skill-badge-container', className)}>
      <img className="badge-icon" src={skill.img} alt={skill.name} />
      <Typography color="text.primary" className="badge-name">
        {skill.name}
      </Typography>
      {skill.level !== undefined && <Box className="skill-level">{getSkillLevel()}</Box>}
    </Box>
  );
};

export default SkillBadge;
