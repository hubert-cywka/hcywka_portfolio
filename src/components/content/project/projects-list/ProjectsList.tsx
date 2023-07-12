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
  return (
    <Grid sx={sx} className="projects-container" container>
      {projects.map((project, index) => (
        <Grid key={index} item xs={12}>
          <ProjectContainer {...project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(ProjectsList);
