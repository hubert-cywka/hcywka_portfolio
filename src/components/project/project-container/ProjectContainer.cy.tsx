import { ProjectContainerPageObjects } from './ProjectContainerPageObjects';
import { mount } from 'cypress/react18';
import ProjectContainer from './ProjectContainer';
import { Project } from '../../../types/interfaces/Project';

const ProjectContainerPO = new ProjectContainerPageObjects();

const buildProjectsContainer = (mockProject: Project) => {
  return mount(<ProjectContainer {...mockProject} />);
};

describe('Testing <ProjectContainer />', () => {
  beforeEach(() => {
    buildProjectsContainer(ProjectContainerPO.PROJECT);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      ProjectContainerPO.projectContainer.should('exist').should('be.visible');
    });

    it('should display correct project name', () => {
      ProjectContainerPO.name
        .should('exist')
        .should('be.visible')
        .should('contain.text', ProjectContainerPO.PROJECT.name);
    });

    it('should display correct description', () => {
      ProjectContainerPO.description
        .should('exist')
        .should('be.visible')
        .should('contain.text', ProjectContainerPO.PROJECT.description[0]);
    });

    it('should display picture container', () => {
      ProjectContainerPO.picture.should('exist').should('be.visible');
    });

    it('should display redirect buttons', () => {
      ProjectContainerPO.buttonsContainer.should('exist').should('be.visible');
      ProjectContainerPO.gitHubButton.should('exist').should('be.visible');
      ProjectContainerPO.websiteButton.should('exist').should('be.visible');
    });
  });

  describe('Testing actions', () => {
    it('should have proper href attribute on website button', () => {
      ProjectContainerPO.websiteButton.should(
        'have.attr',
        'href',
        ProjectContainerPO.PROJECT.url
      );
    });

    it('should have proper href attribute on github button', () => {
      ProjectContainerPO.gitHubButton.should(
        'have.attr',
        'href',
        ProjectContainerPO.PROJECT.github
      );
    });
  });
});
