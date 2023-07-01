import { Skills } from 'shared/constants/Skills';

export class SkillsContainerPageObjects {
  public SKILLS = Skills.FRONTEND_SKILLS;

  get skillsContainer() {
    return cy.get('.skills-container');
  }

  get skillBadges() {
    return this.skillsContainer.children();
  }
}
