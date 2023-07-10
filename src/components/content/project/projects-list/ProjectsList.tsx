import { Grid, SxProps } from '@mui/material';
import ProjectContainer from '../project-container/ProjectContainer';
import { Project } from 'shared/types/Portfolio';
import './ProjectsList.scss';
import { memo } from 'react';

interface ProjectsListProps {
  projects: Project[];
  sx?: SxProps;
}

const ProjectsList = ({ projects, sx }: ProjectsListProps) => {
  const buildProjectContainers = () => {
    return projects.map((project, index) => (
      <Grid key={index} item xs={12}>
        <ProjectContainer {...project} />
      </Grid>
    ));
  };

  return (
    <Grid sx={sx} className="projects-container" container>
      {buildProjectContainers()}
    </Grid>
  );
};

export default memo(ProjectsList);
