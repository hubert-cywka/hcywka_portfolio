import { PROJECTS } from '../../constants/Projects';

export class DescriptionPageObjects {
  public MOCK_DESCRIPTION = PROJECTS[0].description;

  get descriptionContainer() {
    return cy.get('.description-container');
  }

  get paragraphs() {
    return this.descriptionContainer.children();
  }
}
