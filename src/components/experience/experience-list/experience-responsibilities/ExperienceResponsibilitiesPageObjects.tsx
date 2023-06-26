import { IDEMIA_EXPERIENCE } from '../../../../shared/constants/Experience';

export class ExperienceResponsibilitiesPageObjects {
  public RESPONSIBILITIES = IDEMIA_EXPERIENCE.responsibilities ?? [];

  get responsibilitiesContainer() {
    return cy.get('.experience-responsibilities-container');
  }

  get responsibilities() {
    return this.responsibilitiesContainer.children();
  }
}
