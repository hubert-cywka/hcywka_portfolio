import { FLAVOURIFY } from 'shared/constants/Projects';

export class ProjectContainerPageObjects {
  public PROJECT = FLAVOURIFY;

  get projectContainer() {
    return cy.get('.project-container');
  }

  get name() {
    return cy.get('.project-name');
  }

  get buttonsContainer() {
    return cy.get('.buttons-container');
  }

  get gitHubButton() {
    return cy.get(`[aria-label="show project repository"]`);
  }

  get websiteButton() {
    return cy.get(`[aria-label="show live project"]`);
  }

  get picture() {
    return cy.get('.project-picture');
  }

  get description() {
    return cy.get('.description-container');
  }
}
