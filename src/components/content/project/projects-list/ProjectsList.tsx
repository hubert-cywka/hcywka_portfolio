import { Grid, SxProps } from '@mui/material';
import ProjectContainer from '../project-container/ProjectContainer';
import { Project } from 'shared/types/interfaces/Project';
import './ProjectsList.scss';

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

export default ProjectsList;
