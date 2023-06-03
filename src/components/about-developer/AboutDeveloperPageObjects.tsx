import { ME } from '../../constants/Me';

export class AboutDeveloperPageObjects {
  public DEVELOPER = ME;
  public LINKEDIN = ME.contacts[0];
  public GITHUB = ME.contacts[1];

  get picture() {
    return cy.get('.picture');
  }

  get role() {
    return cy.get('.role');
  }

  get name() {
    return cy.get('.name');
  }

  get contactButtonsContainer() {
    return cy.get('.contacts');
  }

  get contactButtons() {
    return this.contactButtonsContainer.children();
  }

  buttonByAltText(altText: string) {
    return cy.get(`img[alt=${altText}]`).parent();
  }
}
