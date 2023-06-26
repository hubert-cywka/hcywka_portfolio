import { Box, Grid, SxProps } from '@mui/material';
import ExperienceInfo from './experience-info/ExperienceInfo';
import './ExperienceContainer.scss';
import { Experience } from '../../../shared/types/interfaces/Experience';

interface ExperienceListProps {
  experience: Experience[];
  sx?: SxProps;
}

const ExperienceList = ({ experience, sx }: ExperienceListProps) => {
  return (
    <Grid item xs={12} sx={sx}>
      <Grid className="experience-container" container>
        {experience.map((exp, index) => {
          return (
            <Grid key={index} item xs={12}>
              <Box className="timeline-point" />
              <ExperienceInfo {...exp} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ExperienceList;
