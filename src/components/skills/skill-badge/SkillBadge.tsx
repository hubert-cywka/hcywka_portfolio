import { Box, Typography } from '@mui/material';
import './SkillBadge.scss';

interface SkillBadgeProps {
  imageSrc: string;
  name: string;
  onClick?: () => void;
}

const SkillBadge = ({ imageSrc, name, onClick }: SkillBadgeProps) => {
  return (
    <Box onClick={onClick} className="skill-badge-container">
      <img className="skill-icon" src={imageSrc} alt={name} />
      <Typography color="text.secondary" className="skill-name">
        {name}
      </Typography>
    </Box>
  );
};

export default SkillBadge;
