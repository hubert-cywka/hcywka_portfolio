import { TECHNICAL_SKILLS } from 'shared/constants/Skills';

export class SkillsContainerPageObjects {
  public SKILLS = TECHNICAL_SKILLS;

  get skillsContainer() {
    return cy.get('.skills-container');
  }

  get skillBadges() {
    return this.skillsContainer.children();
  }
}
