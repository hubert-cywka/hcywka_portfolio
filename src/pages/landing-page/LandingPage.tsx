import { Grid } from '@mui/material';
import './LandingPage.scss';
import { useRef } from 'react';
import {
  AccountCircleRounded,
  AssignmentRounded,
  SchoolRounded,
  StarRounded
} from '@mui/icons-material';
import { useAppearance } from '../../shared/hooks/useAppearance';
import ParallaxBackground from '../../components/animated/parallax-background/ParallaxBackground';
import SlideInWrapper from '../../components/animated/slide-in/SlideInWrapper';
import AboutDeveloper from '../../components/content/about-developer/AboutDeveloper';
import { ME } from '../../shared/constants/Me';
import SectionHeader from '../../components/navigation/section-header/SectionHeader';
import Description from '../../components/content/description/Description';
import ExperienceList from '../../components/content/experience/experience-list/ExperienceContainer';
import { EXPERIENCE } from '../../shared/constants/Experience';
import ProjectsList from '../../components/content/project/projects-list/ProjectsList';
import SkillsContainer from '../../components/content/skills/skills-container/SkillsContainer';
import { PROJECTS } from '../../shared/constants/Projects';
import Navbar from '../../components/navigation/navbar/Navbar';
import { Skills } from '../../shared/constants/Skills';

const MD_BREAKPOINT = 900;

const LandingPage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const isSkillsSectionVisible = useAppearance(skillsRef);
  const isProjectSectionVisible = useAppearance(projectsRef) || isSkillsSectionVisible;
  const isExperienceSectionVisible = useAppearance(experienceRef);
  const isAboutMeSectionVisible = useAppearance(aboutMeRef, '200px');

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      className="landing-page-container"
      sx={{ color: 'text.primary' }}>
      {window.innerWidth >= MD_BREAKPOINT && <ParallaxBackground />}

      <Grid item xs={12} md={11}>
        <Grid container spacing={5}>
          <Grid item sm={12} md={5} lg={4}>
            <SlideInWrapper isIn={isAboutMeSectionVisible} direction="LEFT">
              <AboutDeveloper {...ME} />
            </SlideInWrapper>
          </Grid>

          <Grid item sm={12} md={7} lg={8}>
            <SectionHeader headerText="Hi, I am Hubert!" reference={aboutMeRef} disableTopMargin />
            <SlideInWrapper isIn={isAboutMeSectionVisible}>
              <Description
                sx={{
                  width: window.innerWidth > MD_BREAKPOINT ? '80%' : '100%',
                  marginBottom: '50px'
                }}
                description={[ME.about]}
              />
            </SlideInWrapper>

            <SectionHeader
              headerText="Education & Experience"
              reference={experienceRef}
              disableTopMargin={window.innerWidth > MD_BREAKPOINT}
            />
            <SlideInWrapper isIn={isExperienceSectionVisible} direction="RIGHT">
              <ExperienceList experience={EXPERIENCE} />
            </SlideInWrapper>
          </Grid>

          <Grid item xs={12}>
            <SectionHeader headerText="Featured Projects" reference={projectsRef} />
            <SlideInWrapper isIn={isProjectSectionVisible} direction="LEFT">
              <ProjectsList projects={PROJECTS} />
            </SlideInWrapper>
          </Grid>

          <Grid item xs={12}>
            <SectionHeader headerText="Technical Skills" reference={skillsRef} />
            <SlideInWrapper isIn={isSkillsSectionVisible} direction="RIGHT">
              <SkillsContainer
                programming={Skills.PROGRAMMING_SKILLS}
                design={Skills.DESIGN_SKILLS}
                tools={Skills.TOOLS_SKILLS}
                testing={Skills.TESTING_SKILLS}
              />
            </SlideInWrapper>
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
