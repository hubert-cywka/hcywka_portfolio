import { Box } from '@mui/material';
import SkillBadge from '../skill-badge/SkillBadge';
import './SkillsContainer.scss';
import { Skill } from '../../../shared/types/interfaces/Skill';

interface SkillsContainerProps {
  skills: Skill[];
  wide?: boolean;
}

const SkillsContainer = ({ skills, wide }: SkillsContainerProps) => {
  return (
    <Box className="skills-container">
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} className={wide ? 'wide' : ''} />
      ))}
    </Box>
  );
};

export default SkillsContainer;
