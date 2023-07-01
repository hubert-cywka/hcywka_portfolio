import { Experience } from 'shared/types/interfaces/Experience';
import { mount } from 'cypress/react18';
import ExperienceInfo from './ExperienceInfo';
import { ExperienceInfoPageObjects } from './ExperienceInfoPageObjects';
import { cleanup } from '@testing-library/react';

const ExperienceInfoPO = new ExperienceInfoPageObjects();

const buildExperienceInfo = (mockExperience: Experience) => {
  return mount(<ExperienceInfo {...mockExperience} />);
};

describe('Testing <ExperienceInfo />', () => {
  beforeEach(() => {
    buildExperienceInfo(ExperienceInfoPO.EXPERIENCE);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      ExperienceInfoPO.experienceInfoContainer.should('exist').should('be.visible');
    });

    it('should display correct company name', () => {
      ExperienceInfoPO.companyName
        .should('exist')
        .should('be.visible')
        .should('contain.text', ExperienceInfoPO.EXPERIENCE.companyName);
    });

    it('should display correct position', () => {
      ExperienceInfoPO.position
        .should('exist')
        .should('be.visible')
        .should('contain.text', ExperienceInfoPO.EXPERIENCE.position);
    });

    it('should display correct description', () => {
      ExperienceInfoPO.description
        .should('exist')
        .should('be.visible')
        .should('contain.text', ExperienceInfoPO.EXPERIENCE.description);
    });

    it('should display correct date', () => {
      ExperienceInfoPO.date
        .should('exist')
        .should('be.visible')
        .should('contain.text', ExperienceInfoPO.EXPERIENCE.since)
        .should('contain.text', ExperienceInfoPO.EXPERIENCE.to);
    });

    it('should display expand button if responsibilities are present', () => {
      ExperienceInfoPO.showResponsibilitiesButton.should('exist').should('be.visible');
    });

    it('should not display expand button if responsibilities are not present', () => {
      cleanup();
      buildExperienceInfo(ExperienceInfoPO.EXPERIENCE_WITHOUT_RESPONSIBILITIES);
      ExperienceInfoPO.showResponsibilitiesButton.should('not.exist');
    });
  });

  describe('Testing interactions', () => {
    it('should not initially display responsibilities', () => {
      ExperienceInfoPO.responsibilitiesContainer.should('exist').should('not.be.visible');
    });

    it('should display responsibilities after clicking expand button', () => {
      ExperienceInfoPO.toggleResponsibilitiesVisibility;
      ExperienceInfoPO.responsibilitiesContainer.should('be.visible');
    });

    it('should hide responsibilities after clicking expand button again', () => {
      ExperienceInfoPO.toggleResponsibilitiesVisibility;
      ExperienceInfoPO.toggleResponsibilitiesVisibility;
      ExperienceInfoPO.responsibilitiesContainer.should('exist').should('not.be.visible');
    });
  });
});
