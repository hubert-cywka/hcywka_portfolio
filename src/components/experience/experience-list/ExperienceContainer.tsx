import { Box, Grid } from '@mui/material';
import ExperienceInfo from './experience-info/ExperienceInfo';
import './ExperienceContainer.scss';
import { Experience } from '../../../types/interfaces/Experience';

interface ExperienceListProps {
  experience: Experience[];
}

const ExperienceList = ({ experience }: ExperienceListProps) => {
  return (
    <Grid item xs={12}>
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
