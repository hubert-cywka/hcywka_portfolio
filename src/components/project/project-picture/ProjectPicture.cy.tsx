import { ProjectPicturePageObjects } from './ProjectPicturePageObjects';
import { mount } from 'cypress/react18';
import { ProjectPicture } from './ProjectPicture';

const ProjectPicturePO = new ProjectPicturePageObjects();

const buildProjectPicture = (images: string[], name: string) => {
  return mount(<ProjectPicture imageSrc={images} name={name} />);
};

describe('Testing <ProjectPicture />', () => {
  beforeEach(() => {
    buildProjectPicture(ProjectPicturePO.PICTURES, ProjectPicturePO.NAME);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      ProjectPicturePO.pictureContainer.should('exist').should('be.visible');
    });

    it('should display picture and buttons', () => {
      ProjectPicturePO.picture.should('exist').should('be.visible');
    });

    it('should display buttons', () => {
      ProjectPicturePO.buttonsContainer.should('exist').should('be.visible');
      ProjectPicturePO.nextPictureButton.should('exist').should('be.visible');
      ProjectPicturePO.previousPictureButton.should('exist').should('be.visible');
    });

    it('should initially display first picture from list', () => {
      ProjectPicturePO.picture.should('have.attr', 'src', ProjectPicturePO.PICTURES[0]);
    });
  });

  describe('Testing actions', () => {
    it('should allow to show next picture', () => {
      ProjectPicturePO.showNextPicture;
      ProjectPicturePO.picture.should('have.attr', 'src', ProjectPicturePO.PICTURES[1]);
    });

    it('should allow to show previous picture', () => {
      ProjectPicturePO.showNextPicture;
      ProjectPicturePO.showPreviousPicture;
      ProjectPicturePO.picture.should('have.attr', 'src', ProjectPicturePO.PICTURES[0]);
    });

    it('should display first picture after displaying all pictures', () => {
      ProjectPicturePO.showNextPictureNTimes(ProjectPicturePO.PICTURES.length);
      ProjectPicturePO.picture.should('have.attr', 'src', ProjectPicturePO.PICTURES[0]);
    });
  });
});
