import { Box, Grid, Typography } from '@mui/material';
import AboutMe from '../../about-me/AboutMe';
import './LandingPage.scss';
import { ME } from '../../../constants/Me';
import SkillsContainer from '../../skills/skills-container/SkillsContainer';
import ExperienceList from '../../experience/experience-list/ExperienceContainer';
import { EXPERIENCE } from '../../../constants/Experience';
import ProjectContainer from '../../project/ProjectContainer';
import { FLAVOURIFY, PORTFOLIO } from '../../../constants/Projects';
import Navbar from '../../navbar/Navbar';
import { RefObject, useRef } from 'react';
import {
  AccountCircleRounded,
  AssignmentRounded,
  SchoolRounded,
  StarRounded
} from '@mui/icons-material';
import Description from '../../description/Description';

const MD_BREAKPOINT = 900;

const LandingPage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const buildHeader = (
    headerText: string,
    reference: RefObject<any>,
    disableTopMargin?: boolean
  ) => {
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

  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className="landing-page-container"
        sx={{ color: 'text.primary' }}>
        <Grid className="content-container" item xs={12} md={11}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={4} lg={3}>
              <AboutMe {...ME} />
            </Grid>

            <Grid item xs={12} md={8} lg={9}>
              {buildHeader('Hi, I am Hubert!', aboutMeRef, true)}
              <Description
                sx={{
                  width: window.innerWidth > MD_BREAKPOINT ? '80%' : '100%',
                  marginBottom: '50px'
                }}
                description={[
                  'Enthusiastic second-year IT student at Politechnika Łódzka, specializing in React development. With one year of commercial experience under my belt, I have honed my skills and gained practical knowledge in building web applications using React. I am eager to continue learning and expanding my expertise, embracing new challenges and opportunities in the dynamic world of software development.'
                ]}
              />

              {buildHeader(
                'Education & Experience',
                experienceRef,
                window.innerWidth > MD_BREAKPOINT
              )}
              <ExperienceList experience={EXPERIENCE} />
            </Grid>

            <Grid item xs={12}>
              {buildHeader('Featured Projects', projectsRef)}
              <Grid className="projects-container" container>
                <Grid item xs={12}>
                  <ProjectContainer {...FLAVOURIFY} />
                </Grid>
                <Grid item xs={12}>
                  <ProjectContainer {...PORTFOLIO} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              {buildHeader('Technical Skills', skillsRef)}
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
    </>
  );
};

export default LandingPage;
