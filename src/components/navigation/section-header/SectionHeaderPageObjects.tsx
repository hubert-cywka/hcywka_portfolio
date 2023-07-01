export class SectionHeaderPageObjects {
  public HEADER = 'MOCK HEADER';

  get header() {
    return cy.get('.section-header');
  }

  get headerWords() {
    return this.header.children();
  }
}
