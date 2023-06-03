import { Box, Typography } from '@mui/material';
import { RefObject } from 'react';
import './SectionHeader.scss';

interface SectionHeaderProps {
  headerText: string;
  reference?: RefObject<HTMLDivElement>;
  disableTopMargin?: boolean;
}

const SectionHeader = ({ headerText, reference, disableTopMargin }: SectionHeaderProps) => {
  const words = headerText.split(' ');
  return (
    <Box ref={reference} className={`section-header ${disableTopMargin ? '' : 'extra-margin'}`}>
      {words.map((word, index) => (
        <Typography fontWeight="600" key={index} variant="h4">
          {word}
        </Typography>
      ))}
    </Box>
  );
};

export default SectionHeader;
