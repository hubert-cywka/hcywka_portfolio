import { Box, SxProps, Typography } from '@mui/material';
import SkillBadge from '../skill-badge/SkillBadge';
import './SkillsContainer.scss';
import { Skill } from 'shared/types/Portfolio';
import { memo } from 'react';

interface SkillsContainerProps {
  programming: Skill[];
  tools: Skill[];
  design: Skill[];
  testing: Skill[];
  wide?: boolean;
  sx?: SxProps;
}

const SkillsContainer = ({
  programming,
  tools,
  design,
  testing,
  wide,
  sx
}: SkillsContainerProps) => {
  const buildListOfSkills = (skills: Skill[], header: string) => {
    return (
      <Box component="section" className="skills-category-container" sx={sx}>
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
    <Box component="article" className="skills-container">
      {buildListOfSkills(programming, 'Languages, Libraries & Frameworks')}
      {buildListOfSkills(tools, 'Tools')}
      {buildListOfSkills(testing, 'Testing')}
      {buildListOfSkills(design, 'Design')}
    </Box>
  );
};

export default memo(SkillsContainer);
