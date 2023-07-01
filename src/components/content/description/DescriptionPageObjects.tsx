import { PROJECTS } from 'shared/constants/Projects';

export class DescriptionPageObjects {
  public DESCRIPTION = PROJECTS[0].description;

  get descriptionContainer() {
    return cy.get('.description-container');
  }

  get paragraphs() {
    return this.descriptionContainer.children();
  }
}
