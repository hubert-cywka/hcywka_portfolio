import { Box, Typography } from '@mui/material';
import SkillBadge from '../skill-badge/SkillBadge';
import './SkillsContainer.scss';
import { Skill } from 'shared/types/interfaces/Skill';

interface SkillsContainerProps {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
  design: Skill[];
  testing: Skill[];
  wide?: boolean;
}

const SkillsContainer = ({
  frontend,
  backend,
  tools,
  design,
  testing,
  wide
}: SkillsContainerProps) => {
  const buildListOfSkills = (skills: Skill[], header: string) => {
    return (
      <Box className="skills-category-container">
        <Typography className="skills-category-header">{header}</Typography>
        <Box className="skills-category-list">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} className={wide ? 'wide' : ''} />
          ))}
        </Box>
      </Box>
    );
  };

  return (
    <Box className="skills-container">
      {buildListOfSkills(frontend, 'Frontend')}
      {buildListOfSkills(tools, 'Tools')}
      {buildListOfSkills(testing, 'Testing')}
      {buildListOfSkills(backend, 'Backend')}
      {buildListOfSkills(design, 'Design')}
    </Box>
  );
};

export default SkillsContainer;
