import { mount } from 'cypress/react18';
import { Skill } from 'shared/types/Portfolio';
import SkillBadge from './SkillBadge';
import { SkillBadgePageObjects } from './SkillBadgePageObjects';

const SkillBadgePO = new SkillBadgePageObjects();

const buildSkillBadge = (mockSkill: Skill) => {
  mount(<SkillBadge skill={mockSkill} />);
};

describe('Testing <SkillBadge/>', () => {
  describe('Testing layout', () => {
    it('displays icon, name', () => {
      buildSkillBadge(SkillBadgePO.SKILL);
      SkillBadgePO.badgeIcon.should('exist').should('be.visible');
      SkillBadgePO.badgeName.should('exist').should('be.visible');
    });

    it('displays skill level if provided', () => {
      buildSkillBadge(SkillBadgePO.SKILL);
      SkillBadgePO.skillLevelContainer.should('exist').should('be.visible');
    });

    it('not displays skill level if not provided', () => {
      buildSkillBadge(SkillBadgePO.SKILL_WITHOUT_LEVEL);
      SkillBadgePO.skillLevelContainer.should('not.exist');
    });
  });

  describe('Testing correctness of displayed data', () => {
    beforeEach(() => {
      buildSkillBadge(SkillBadgePO.SKILL);
    });

    it('displays correct image', () => {
      SkillBadgePO.badgeIcon.should('have.attr', 'src', SkillBadgePO.SKILL.img);
    });

    it('displays correct name', () => {
      SkillBadgePO.badgeName.should('contain.text', SkillBadgePO.SKILL.name);
    });

    it('displays correct skill level', () => {
      SkillBadgePO.highlightedSkillLevelDots.should('have.length', SkillBadgePO.SKILL.level);
    });
  });
});
