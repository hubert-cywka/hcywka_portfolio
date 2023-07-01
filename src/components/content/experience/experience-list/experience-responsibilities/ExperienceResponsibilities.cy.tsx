import { mount } from 'cypress/react18';
import ExperienceResponsibilities from './ExperienceResponsibilities';
import { ExperienceResponsibilitiesPageObjects } from './ExperienceResponsibilitiesPageObjects';

const ExperienceResponsibilitiesPO = new ExperienceResponsibilitiesPageObjects();

const buildExperienceResponsibilities = (mockResponsibilities: string[]) => {
  return mount(<ExperienceResponsibilities responsibilities={mockResponsibilities} />);
};

describe('Testing <ExperienceResponsibilities/>', () => {
  beforeEach(() => {
    buildExperienceResponsibilities(ExperienceResponsibilitiesPO.RESPONSIBILITIES);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      ExperienceResponsibilitiesPO.responsibilitiesContainer.should('exist').should('be.visible');
    });

    it('should display list of responsibilities', () => {
      ExperienceResponsibilitiesPO.responsibilities.each(($responsibility) => {
        cy.wrap($responsibility).should('exist').should('be.visible');
      });
    });

    it('should display correct content of responsibilities', () => {
      ExperienceResponsibilitiesPO.responsibilities.each(($responsibility, index) => {
        cy.wrap($responsibility).should(
          'contain.text',
          ExperienceResponsibilitiesPO.RESPONSIBILITIES[index]
        );
      });
    });

    it('should display correct amount of responsibilities', () => {
      ExperienceResponsibilitiesPO.responsibilities.should(
        'have.length',
        ExperienceResponsibilitiesPO.RESPONSIBILITIES.length
      );
    });
  });
});
