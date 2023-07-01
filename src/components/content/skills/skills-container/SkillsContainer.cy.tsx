import { mount } from 'cypress/react18';
import SkillsContainer from './SkillsContainer';
import { SkillsContainerPageObjects } from './SkillsContainerPageObjects';
import { Skill } from 'shared/types/interfaces/Skill';
import { cleanup } from '@testing-library/react';

const SkillsContainerPO = new SkillsContainerPageObjects();

const buildSkillsContainer = (mockSkills: Skill[], wide?: boolean) => {
  return mount(
    <SkillsContainer
      frontend={mockSkills}
      backend={mockSkills}
      tools={mockSkills}
      testing={mockSkills}
      design={mockSkills}
      wide={wide}
    />
  );
};

describe('Testing <SkillsContainer/>', () => {
  beforeEach(() => {
    buildSkillsContainer(SkillsContainerPO.SKILLS);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      SkillsContainerPO.skillsContainer.should('exist').should('be.visible');
    });

    it('should display skills category header', () => {
      SkillsContainerPO.skillsCategoryHeader.should('exist').should('be.visible');
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
