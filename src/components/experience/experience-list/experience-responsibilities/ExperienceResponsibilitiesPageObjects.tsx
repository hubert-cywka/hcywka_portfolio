import { IDEMIA_EXPERIENCE } from '../../../../constants/Experience';

export class ExperienceResponsibilitiesPageObjects {
  public MOCK_RESPONSIBILITIES = IDEMIA_EXPERIENCE.responsibilities ?? [];

  get responsibilitiesContainer() {
    return cy.get('.experience-responsibilities-container');
  }

  get responsibilities() {
    return this.responsibilitiesContainer.children();
  }
}
