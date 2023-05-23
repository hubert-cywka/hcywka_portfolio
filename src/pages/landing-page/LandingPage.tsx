import { Grid } from '@mui/material';
import AboutDeveloper from '../../components/about-developer/AboutDeveloper';
import './LandingPage.scss';
import { ME } from '../../constants/Me';
import SkillsContainer from '../../components/skills/skills-container/SkillsContainer';
import ExperienceList from '../../components/experience/experience-list/ExperienceContainer';
import { EXPERIENCE } from '../../constants/Experience';
import { PROJECTS } from '../../constants/Projects';
import Navbar from '../../components/navbar/Navbar';
import { useRef } from 'react';
import {
  AccountCircleRounded,
  AssignmentRounded,
  SchoolRounded,
  StarRounded
} from '@mui/icons-material';
import Description from '../../components/description/Description';
import ProjectsList from '../../components/project/projects-list/ProjectsList';
import SectionHeader from '../../components/section-header/SectionHeader';
import ParallaxBackground from '../../components/parallax-background/ParallaxBackground';

const MD_BREAKPOINT = 900;

const LandingPage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      className="landing-page-container"
      sx={{ color: 'text.primary' }}>
      {window.innerWidth >= MD_BREAKPOINT && <ParallaxBackground />}

      <Grid className="content-container" item xs={12} md={11}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={4} lg={3}>
            <AboutDeveloper {...ME} />
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <SectionHeader headerText="Hi, I am Hubert!" reference={aboutMeRef} disableTopMargin />
            <Description
              sx={{
                width: window.innerWidth > MD_BREAKPOINT ? '80%' : '100%',
                marginBottom: '50px'
              }}
              description={[ME.about]}
            />

            <SectionHeader
              headerText="Education & Experience"
              reference={experienceRef}
              disableTopMargin={window.innerWidth > MD_BREAKPOINT}
            />
            <ExperienceList experience={EXPERIENCE} />
          </Grid>

          <Grid item xs={12}>
            <SectionHeader headerText="Featured Projects" reference={projectsRef} />
            <ProjectsList projects={PROJECTS} />
          </Grid>

          <Grid item xs={12}>
            <SectionHeader headerText="Technical Skills" reference={skillsRef} />
            <SkillsContainer />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={0} md={1}>
        <Navbar
          items={[
            { icon: <AccountCircleRounded />, ref: aboutMeRef },
            { icon: <SchoolRounded />, ref: experienceRef },
            { icon: <AssignmentRounded />, ref: projectsRef },
            { icon: <StarRounded />, ref: skillsRef }
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
