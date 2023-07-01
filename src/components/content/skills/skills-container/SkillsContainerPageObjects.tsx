import { Skills } from 'shared/constants/Skills';

export class SkillsContainerPageObjects {
  public SKILLS = Skills.PROGRAMMING_SKILLS;

  get skillsContainer() {
    return cy.get('.skills-container');
  }

  get skillsCategoryHeader() {
    return this.skillsContainer.get('.skills-category-header');
  }

  get skillBadges() {
    return this.skillsContainer.get('.skills-category-list').children();
  }
}
