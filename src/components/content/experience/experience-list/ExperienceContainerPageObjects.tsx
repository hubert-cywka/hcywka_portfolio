import { EXPERIENCE } from 'shared/constants/Experience';

export class ExperienceContainerPageObjects {
  public EXPERIENCE = EXPERIENCE;

  get experienceContainer() {
    return cy.get('.experience-container');
  }

  get timelinePoints() {
    return cy.get('.timeline-point');
  }

  get experienceInfo() {
    return cy.get('.experience-info-container');
  }
}
