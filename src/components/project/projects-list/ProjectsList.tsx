import { Grid } from '@mui/material';
import ProjectContainer from '../project-container/ProjectContainer';
import { Project } from '../../../types/interfaces/Project';
import './ProjectsList.scss';

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  const buildProjectContainers = () => {
    return projects.map((project, index) => (
      <Grid key={index} item xs={12}>
        <ProjectContainer {...project} />
      </Grid>
    ));
  };

  return (
    <Grid className="projects-container" container>
      {buildProjectContainers()}
    </Grid>
  );
};

export default ProjectsList;
