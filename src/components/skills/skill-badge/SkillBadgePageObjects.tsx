import { Skill } from '../../../types/interfaces/Skill';

export class SkillBadgePageObjects {
  public MOCK_SKILL: Skill = {
    img: 'MOCK_IMG_1',
    name: 'MOCK_NAME_1',
    level: 2
  };

  public MOCK_SKILL_WITHOUT_LEVEL: Skill = {
    img: 'MOCK_IMG_2',
    name: 'MOCK_NAME_2'
  };

  get badgeIcon() {
    return cy.get('.badge-icon');
  }

  get badgeName() {
    return cy.get('.badge-name');
  }

  get skillLevelContainer() {
    return cy.get('.skill-level');
  }

  get skillLevelDot() {
    return cy.get('.skill-level-dot');
  }

  get highlightedSkillLevelDots() {
    return cy.get('.on');
  }
}
