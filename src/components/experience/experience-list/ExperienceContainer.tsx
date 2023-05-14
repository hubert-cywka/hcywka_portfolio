import { Box, Grid } from '@mui/material';
import ExperienceInfo from './experience-info/ExperienceInfo';
import ExperienceResponsibilities from './experience-responsibilities/ExperienceResponsibilities';
import './ExperienceContainer.scss';
import { Experience } from '../../../types/interfaces/Experience';

interface ExperienceListProps {
  experience: Experience;
}

const ExperienceList = ({ experience }: ExperienceListProps) => {
  return (
    <Grid className="experience-container" item xs={12} sx={{ height: '100%' }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <ExperienceInfo {...experience} />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Box className="experience-responsibilities">
            <Box className="experience-divider" />
            <ExperienceResponsibilities responsibilities={experience.responsibilities} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperienceList;
