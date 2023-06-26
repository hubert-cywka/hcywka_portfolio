import { IDEMIA_EXPERIENCE, LODZ_EXPERIENCE } from '../../../../shared/constants/Experience';

export class ExperienceInfoPageObjects {
  public EXPERIENCE = IDEMIA_EXPERIENCE;
  public EXPERIENCE_WITHOUT_RESPONSIBILITIES = LODZ_EXPERIENCE;

  get experienceInfoContainer() {
    return cy.get('.experience-info-container');
  }

  get companyName() {
    return cy.get('.company-name');
  }

  get position() {
    return cy.get('.position');
  }

  get date() {
    return cy.get('.date');
  }

  get description() {
    return cy.get('.description');
  }

  get showResponsibilitiesButton() {
    return cy.get('.expand-button');
  }

  get toggleResponsibilitiesVisibility() {
    return this.showResponsibilitiesButton.click();
  }

  get responsibilitiesContainer() {
    return cy.get('.experience-responsibilities-container');
  }
}
