import { mount } from 'cypress/react18';
import SkillsContainer from './SkillsContainer';
import { SkillsContainerPageObjects } from './SkillsContainerPageObjects';
import { Skill } from '../../../shared/types/interfaces/Skill';
import { cleanup } from '@testing-library/react';

const SkillsContainerPO = new SkillsContainerPageObjects();

const buildSkillsContainer = (mockSkills: Skill[], wide?: boolean) => {
  return mount(<SkillsContainer skills={mockSkills} wide={wide} />);
};

describe('Testing <SkillsContainer/>', () => {
  beforeEach(() => {
    buildSkillsContainer(SkillsContainerPO.SKILLS);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      SkillsContainerPO.skillsContainer.should('exist').should('be.visible');
    });

    it('should contain correct amount of skill badges', () => {
      SkillsContainerPO.skillBadges.should('have.length', SkillsContainerPO.SKILLS.length);
    });

    it(`should not pass 'wide' class when prop is set to false`, () => {
      SkillsContainerPO.skillBadges.each(($badge) =>
        cy.wrap($badge).should('not.have.class', 'wide')
      );
    });

    it(`should pass 'wide' class when prop is set to true`, () => {
      cleanup();
      buildSkillsContainer(SkillsContainerPO.SKILLS, true);
      SkillsContainerPO.skillBadges.each(($badge) => cy.wrap($badge).should('have.class', 'wide'));
    });
  });
});
