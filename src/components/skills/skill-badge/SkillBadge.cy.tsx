import { mount } from 'cypress/react18';
import { Skill } from '../../../types/interfaces/Skill';
import SkillBadge from './SkillBadge';
import { SkillBadgePageObjects } from './SkillBadgePageObjects';

const SkillBadgePO = new SkillBadgePageObjects();

const buildSkillBadge = (mockSkill: Skill) => {
  mount(<SkillBadge skill={mockSkill} />);
};

describe('Testing <SkillBadge/>', () => {
  describe('Testing layout', () => {
    it('displays icon, name', () => {
      buildSkillBadge(SkillBadgePO.MOCK_SKILL);
      SkillBadgePO.badgeIcon.should('exist').should('be.visible');
      SkillBadgePO.badgeName.should('exist').should('be.visible');
    });

    it('displays skill level if provided', () => {
      buildSkillBadge(SkillBadgePO.MOCK_SKILL);
      SkillBadgePO.skillLevelContainer.should('exist').should('be.visible');
    });

    it('not displays skill level if not provided', () => {
      buildSkillBadge(SkillBadgePO.MOCK_SKILL_WITHOUT_LEVEL);
      SkillBadgePO.skillLevelContainer.should('not.exist');
    });
  });

  describe('Testing correctness of displayed data', () => {
    beforeEach(() => {
      buildSkillBadge(SkillBadgePO.MOCK_SKILL);
    });

    it('displays correct image', () => {
      SkillBadgePO.badgeIcon.should('have.attr', 'src', SkillBadgePO.MOCK_SKILL.img);
    });

    it('displays correct name', () => {
      SkillBadgePO.badgeName.should('contain.text', SkillBadgePO.MOCK_SKILL.name);
    });

    it('displays correct skill level', () => {
      SkillBadgePO.highlightedSkillLevelDots.should('have.length', SkillBadgePO.MOCK_SKILL.level);
    });
  });
});
