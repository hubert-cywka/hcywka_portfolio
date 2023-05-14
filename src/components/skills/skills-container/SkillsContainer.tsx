import { Box } from '@mui/material';
import { SKILLS } from '../../../constants/Skills';
import SkillBadge from '../skill-badge/SkillBadge';
import './SkillsContainer.scss';

const SkillsContainer = () => {
  return (
    <Box className="skills-container">
      {SKILLS.map((skill, index) => (
        <SkillBadge key={index} imageSrc={skill.img} name={skill.name} />
      ))}
    </Box>
  );
};

export default SkillsContainer;
