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
    <Typography
      fontWeight="700"
      variant="h4"
      ref={reference}
      className={classNames('section-header', { extraMargin: !reduceTopMargin })}>
      {words.map((word, index) => (
        <Box key={index} component="span">
          {word}
        </Box>
      ))}
    </Typography>
  );
};

export default SectionHeader;
