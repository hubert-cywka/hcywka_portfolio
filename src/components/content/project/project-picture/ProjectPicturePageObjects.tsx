import { FLAVOURIFY } from 'shared/constants/Projects';

export class ProjectPicturePageObjects {
  public PICTURES = FLAVOURIFY.imageSrc;
  public NAME = FLAVOURIFY.name;

  get pictureContainer() {
    return cy.get('.project-picture-container');
  }

  get picture() {
    return cy.get('.project-picture');
  }

  get buttonsContainer() {
    return cy.get('.image-change-buttons');
  }

  get previousPictureButton() {
    return cy.get(`[aria-label="previous picture button"]`);
  }

  get nextPictureButton() {
    return cy.get(`[aria-label="next picture button"]`);
  }

  get showPreviousPicture() {
    return this.previousPictureButton.click();
  }

  get showNextPicture() {
    return this.nextPictureButton.click();
  }

  showNextPictureNTimes(times: number) {
    for (let time = 0; time < times; time++) {
      this.showNextPicture;
    }
  }
}
