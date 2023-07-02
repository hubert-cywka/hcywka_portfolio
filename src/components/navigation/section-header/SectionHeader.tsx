import { Box, Typography } from '@mui/material';
import { RefObject } from 'react';
import './SectionHeader.scss';
import classNames from 'classnames';

interface SectionHeaderProps {
  headerText: string;
  reference?: RefObject<HTMLDivElement>;
  reduceTopMargin?: boolean;
}

const SectionHeader = ({ headerText, reference, reduceTopMargin }: SectionHeaderProps) => {
  const words = headerText.split(' ');
  return (
    <Box
      ref={reference}
      className={classNames('section-header', { extraMargin: !reduceTopMargin })}>
      {words.map((word, index) => (
        <Typography fontWeight="600" key={index} variant="h4">
          {word}
        </Typography>
      ))}
    </Box>
  );
};

export default SectionHeader;
