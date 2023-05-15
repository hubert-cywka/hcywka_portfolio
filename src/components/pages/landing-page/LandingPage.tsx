import { Box, Grid, Typography } from '@mui/material';
import Header from '../../header/Header';
import './LandingPage.scss';
import { ME } from '../../../constants/Me';
import SkillsContainer from '../../skills/skills-container/SkillsContainer';
import ExperienceList from '../../experience/experience-list/ExperienceContainer';
import { EXPERIENCE } from '../../../constants/Experience';
import ProjectContainer from '../../project/ProjectContainer';
import { FLAVOURIFY } from '../../../constants/Projects';

const LandingPage = () => {
  return (
    <Box className="landing-page-container" sx={{ color: 'text.primary' }}>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={12} md={3}>
          <Header {...ME} />
        </Grid>
        <Grid className="content-container" item xs={12} sm={12} md={9}>
          <Grid container>
            <Grid item xs={12}>
              <Box className="section-header">
                <Typography variant="h4">Featured</Typography>
                <Typography variant="h4">Projects</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ProjectContainer {...FLAVOURIFY} />
            </Grid>

            <Grid item xs={12}>
              <Box className="section-header extra-margin">
                <Typography variant="h4">Education</Typography>
                <Typography variant="h4">& Experience</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <ExperienceList experience={EXPERIENCE} />
            </Grid>

            <Grid item xs={12}>
              <Box className="section-header extra-margin">
                <Typography variant="h4">Technical</Typography>
                <Typography variant="h4">Skills</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <SkillsContainer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
