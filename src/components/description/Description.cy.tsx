import { mount } from 'cypress/react18';
import Description from './Description';
import { DescriptionPageObjects } from './DescriptionPageObjects';

const DescriptionPO = new DescriptionPageObjects();

const buildDescription = (mockDescription: string[]) => {
  return mount(<Description description={mockDescription} />);
};

describe('Testing <Description/>', () => {
  beforeEach(() => {
    buildDescription(DescriptionPO.MOCK_DESCRIPTION);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      DescriptionPO.descriptionContainer.should('exist').should('be.visible');
    });

    it('should contain visible paragraphs', () => {
      DescriptionPO.paragraphs.each(($paragraph) => {
        cy.wrap($paragraph).should('exist').should('be.visible');
      });
    });

    it('should contain correct paragraphs content', () => {
      DescriptionPO.paragraphs.each(($paragraph, index) => {
        cy.wrap($paragraph).should('contain.text', DescriptionPO.MOCK_DESCRIPTION[index]);
      });
    });

    it('should be contain correct amount of paragraphs', () => {
      DescriptionPO.paragraphs.should('have.length', DescriptionPO.MOCK_DESCRIPTION.length);
    });
  });
});
