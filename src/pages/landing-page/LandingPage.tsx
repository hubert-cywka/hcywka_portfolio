import { Grid } from '@mui/material';
import './LandingPage.scss';
import { useEffect, useRef, useState } from 'react';
import {
  AccountCircleRounded,
  AssignmentRounded,
  SchoolRounded,
  StarRounded
} from '@mui/icons-material';
import { useAppearance } from '../../shared/hooks/useAppearance';
import ParallaxBackground from '../../components/animated/parallax-background/ParallaxBackground';
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
import { useSlideInProps } from '../../shared/hooks/useSlideInProps';
import { useWindowSize } from '../../shared/hooks/useWindowResize';
import { useIntersection } from '../../shared/hooks/useIntersection';

export const MD_BREAKPOINT = 900;

const LandingPage = () => {
  const [windowWidth] = useWindowSize();
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const hasSkillsAppeared = useAppearance(skillsRef);
  const hasProjectsAppeared = useAppearance(projectsRef) || hasSkillsAppeared;
  const hasExperienceAppeared = useAppearance(experienceRef);
  const hasAboutMeAppeared = useAppearance(aboutMeRef, '200px');

  const isSkillsSectionVisible = useIntersection(skillsRef);
  const isProjectsSectionVisible = useIntersection(projectsRef);
  const isExperienceSectionVisible = useIntersection(experienceRef);
  const isAboutMeSectionVisible = useIntersection(aboutMeRef);

  const skillsSlideInProps = useSlideInProps(hasSkillsAppeared, 'RIGHT');
  const projectsSlideInProps = useSlideInProps(hasProjectsAppeared, 'LEFT');
  const experienceSlideInProps = useSlideInProps(hasExperienceAppeared, 'RIGHT');
  const aboutMeSlideInProps = useSlideInProps(hasAboutMeAppeared, 'RIGHT');
  const developerSlideInProps = useSlideInProps(hasAboutMeAppeared, 'LEFT');

  useEffect(() => {
    if (isAboutMeSectionVisible) {
      setActiveSectionIndex(0);
    } else if (isExperienceSectionVisible) {
      setActiveSectionIndex(1);
    } else if (isProjectsSectionVisible) {
      setActiveSectionIndex(2);
    } else if (isSkillsSectionVisible) {
      setActiveSectionIndex(3);
    }
  }, [
    isSkillsSectionVisible,
    isProjectsSectionVisible,
    isExperienceSectionVisible,
    isAboutMeSectionVisible
  ]);

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      className="landing-page-container"
      sx={{ color: 'text.primary' }}>
      {windowWidth >= MD_BREAKPOINT && <ParallaxBackground />}

      <Grid item xs={12} md={11}>
        <Grid container spacing={5}>
          <Grid item sm={12} md={5} lg={4}>
            <AboutDeveloper {...ME} sx={developerSlideInProps} />
          </Grid>

          <Grid item sm={12} md={7} lg={8}>
            <SectionHeader headerText="Hi, I am Hubert!" reference={aboutMeRef} reduceTopMargin />
            <Description
              sx={{
                width: windowWidth > MD_BREAKPOINT ? '80%' : '100%',
                marginBottom: '50px',
                ...aboutMeSlideInProps
              }}
              description={[ME.about]}
            />

            <SectionHeader
              headerText="Education & Experience"
              reference={experienceRef}
              reduceTopMargin={windowWidth > MD_BREAKPOINT}
            />
            <ExperienceList experience={EXPERIENCE} sx={experienceSlideInProps} />
          </Grid>

          <Grid item xs={12}>
            <SectionHeader headerText="Featured Projects" reference={projectsRef} />
            <ProjectsList projects={PROJECTS} sx={projectsSlideInProps} />
          </Grid>

          <Grid item xs={12}>
            <SectionHeader headerText="Technical Skills" reference={skillsRef} />
            <SkillsContainer
              programming={Skills.PROGRAMMING_SKILLS}
              design={Skills.DESIGN_SKILLS}
              tools={Skills.TOOLS_SKILLS}
              testing={Skills.TESTING_SKILLS}
              sx={skillsSlideInProps}
            />
          </Grid>
        </Grid>
      </Grid>

      <Navbar
        activeIndex={activeSectionIndex}
        items={[
          { icon: <AccountCircleRounded />, ref: aboutMeRef },
          { icon: <SchoolRounded />, ref: experienceRef },
          { icon: <AssignmentRounded />, ref: projectsRef },
          { icon: <StarRounded />, ref: skillsRef }
        ]}
      />
    </Grid>
  );
};

export default LandingPage;
