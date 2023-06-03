export class NavbarPageObjects {
  public ABOUT = 0;
  public EXPERIENCE = 1;
  public PROJECTS = 2;
  public SKILLS = 3;

  get navbarContainer() {
    return cy.get('.navbar-container');
  }

  get navbarItems() {
    return this.navbarContainer.children();
  }

  clickOnNthNavbarItem(index: number) {
    return this.navbarItems.eq(index).click();
  }
}
