import { Box, Grid, Typography } from '@mui/material';
import Header from '../../header/Header';
import SocialsContainer from '../../socials/SocialsContainer';
import './LandingPage.scss';
import SkillsContainer from '../../skills/skills-container/SkillsContainer';
import ProjectContainer from '../../project/ProjectContainer';
import ExperienceList from '../../experience/experience-list/ExperienceContainer';
import { FLAVOURIFY } from '../../../constants/Projects';
import { EXPERIENCE } from '../../../constants/Experience';
import AboutMe from '../../about-me/AboutMe';
import Contact from '../../contact/Contact';

const LandingPage = () => {
  return (
    <Box className="landing-page-container" sx={{ color: 'text.primary' }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={4}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <SocialsContainer />
        </Grid>

        <Grid item xs={12}>
          <Typography className="section-header">ABOUT ME</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <AboutMe />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Contact />
        </Grid>

        <Grid item xs={12}>
          <Typography className="section-header">PROJECTS</Typography>
        </Grid>
        <ProjectContainer {...FLAVOURIFY}>
          <Box className="text-paragraph">
            {`I've developed a versatile recipe book app that caters to users' needs by providing an extensive collection of recipes. This app incorporates a user system, allowing users to create personalized profiles and save their favorite recipes.`}
          </Box>
          <Box className="text-paragraph">
            {`One of the app's standout features is the convenient option to create menus. Users can plan their meals by selecting recipes from the recipe book and organizing them into menus for specific days or occasions. The app then calculates the required ingredients, streamlining the grocery shopping process.`}
          </Box>
          <Box className="text-paragraph">
            {`The app was built using React and TypeScript, utilizing popular libraries such as Material UI, React Query, and React Hook Form for enhanced functionality and user experience. Its Mobile First Design ensures a seamless mobile viewing experience, and thanks to Capacitor, it can be easily converted into a mobile app.`}
          </Box>
          <Box className="text-paragraph">
            {`For the backend, I've developed a Java Spring Boot-based system, which efficiently handles data storage, retrieval, and user authentication, ensuring a robust and secure user experience.`}
          </Box>
        </ProjectContainer>

        <Grid item xs={12}>
          <Typography className="section-header bottom-margin">EXPERIENCE</Typography>
        </Grid>
        <Grid item xs={12}>
          {EXPERIENCE.map((experience, index) => {
            return <ExperienceList experience={experience} key={index} />;
          })}
        </Grid>

        <Grid item xs={12}>
          <Typography className="section-header">TECH STACK</Typography>
          <SkillsContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
