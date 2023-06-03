import { Experience } from '../../../types/interfaces/Experience';
import { mount } from 'cypress/react18';
import ExperienceContainer from './ExperienceContainer';
import { ExperienceContainerPageObjects } from './ExperienceContainerPageObjects';

const ExperienceContainerPO = new ExperienceContainerPageObjects();

const buildExperienceContainer = (mockExperience: Experience[]) => {
  return mount(<ExperienceContainer experience={mockExperience} />);
};

describe('Testing <ExperienceContainer/>', () => {
  beforeEach(() => {
    buildExperienceContainer(ExperienceContainerPO.EXPERIENCE);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      ExperienceContainerPO.experienceContainer.should('exist').should('be.visible');
    });

    it('should should display timeline', () => {
      ExperienceContainerPO.timelinePoints.each(($point) => {
        cy.wrap($point).should('exist').should('be.visible');
      });
    });

    it('should should display correct amount of timeline points', () => {
      ExperienceContainerPO.timelinePoints.should(
        'have.length',
        ExperienceContainerPO.EXPERIENCE.length
      );
    });

    it('should should display experience info', () => {
      ExperienceContainerPO.experienceInfo.each(($info) => {
        cy.wrap($info).should('exist').should('be.visible');
      });
    });

    it('should should display correct amount of experience info', () => {
      ExperienceContainerPO.experienceInfo.should(
        'have.length',
        ExperienceContainerPO.EXPERIENCE.length
      );
    });
  });
});
