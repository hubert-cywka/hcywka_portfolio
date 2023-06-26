import { PROJECTS } from '../../../shared/constants/Projects';

export class ProjectsListPageObjects {
  public PROJECTS = PROJECTS;

  get projectsContainer() {
    return cy.get('.projects-container');
  }

  get projects() {
    return this.projectsContainer.children();
  }
}
