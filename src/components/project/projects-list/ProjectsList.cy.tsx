import { mount } from 'cypress/react18';
import ProjectsList from './ProjectsList';
import { Project } from '../../../types/interfaces/Project';
import { ProjectsListPageObjects } from './ProjectsListPageObjects';

const ProjectsListPO = new ProjectsListPageObjects();

const buildProjectsList = (mockProjects: Project[]) => {
  return mount(<ProjectsList projects={mockProjects} />);
};

describe('Testing <ProjectsList />', () => {
  beforeEach(() => {
    buildProjectsList(ProjectsListPO.PROJECTS);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      ProjectsListPO.projectsContainer.should('exist').should('be.visible');
    });

    it('should display each project', () => {
      ProjectsListPO.projects.each(($project) => {
        cy.wrap($project).should('exist').should('be.visible');
      });
    });

    it('should display correct amount of projects', () => {
      ProjectsListPO.projects.should('have.length', ProjectsListPO.PROJECTS.length);
    });
  });
});
