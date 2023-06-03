import { mount } from 'cypress/react18';
import SectionHeader from './SectionHeader';
import { SectionHeaderPageObjects } from './SectionHeaderPageObjects';

const SectionHeaderPO = new SectionHeaderPageObjects();

const buildSectionHeader = (mockHeader: string) => {
  return mount(<SectionHeader headerText={mockHeader} />);
};

describe('Testing <SectionHeader />', () => {
  beforeEach(() => {
    buildSectionHeader(SectionHeaderPO.MOCK_HEADER);
  });

  describe('Testing layout', () => {
    it('should be visible', () => {
      SectionHeaderPO.header.should('exist').should('be.visible');
    });

    it('should display each word', () => {
      SectionHeaderPO.headerWords.each(($word) => {
        cy.wrap($word).should('exist').should('be.visible');
      });
    });

    it('should split header into separate words', () => {
      const words = SectionHeaderPO.MOCK_HEADER.split(' ');
      SectionHeaderPO.headerWords.each(($word, index) => {
        cy.wrap($word).should('contain.text', words[index]);
      });
    });

    it('should split header into exactly one block for one word', () => {
      const words = SectionHeaderPO.MOCK_HEADER.split(' ');
      SectionHeaderPO.headerWords.should('have.length', words.length);
    });
  });
});
