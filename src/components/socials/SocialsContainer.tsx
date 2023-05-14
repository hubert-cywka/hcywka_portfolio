import { Box } from '@mui/material';
import SkillBadge from '../skills/skill-badge/SkillBadge';
import './SocialsContainer.scss';
import { LINKS } from '../../constants/Links';

const SocialsContainer = () => {
  return (
    <Box className="auto-scroll-container">
      {LINKS.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}>
          <SkillBadge imageSrc={link.img} name={link.name} />
        </a>
      ))}
    </Box>
  );
};

export default SocialsContainer;
