export class SectionHeaderPageObjects {
  public MOCK_HEADER = 'MOCK HEADER';

  get header() {
    return cy.get('.section-header');
  }

  get headerWords() {
    return this.header.children();
  }
}
