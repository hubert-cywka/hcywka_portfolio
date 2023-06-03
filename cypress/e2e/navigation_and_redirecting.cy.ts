import { ProjectContainerPageObjects } from '../../src/components/project/project-container/ProjectContainerPageObjects';
import { AboutDeveloperPageObjects } from '../../src/components/about-developer/AboutDeveloperPageObjects';
import { NavbarPageObjects } from '../../src/components/navbar/NavbarPageObjects';
import { SkillsContainerPageObjects } from '../../src/components/skills/skills-container/SkillsContainerPageObjects';
import { ExperienceContainerPageObjects } from '../../src/components/experience/experience-list/ExperienceContainerPageObjects';

const ProjectContainerPO = new ProjectContainerPageObjects();
const AboutDeveloperPO = new AboutDeveloperPageObjects();
const NavbarPO = new NavbarPageObjects();
const SkillsContainerPO = new SkillsContainerPageObjects();
const ExperienceContainerPO = new ExperienceContainerPageObjects();

describe('Testing LandingPage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Testing navigating over page', () => {
    it('should slide to about section after clicking specific navbar button', () => {
      NavbarPO.clickOnNthNavbarItem(NavbarPO.ABOUT);
      AboutDeveloperPO.name.should('be.visible');
    });

    it('should slide to skills section after clicking specific navbar button', () => {
      NavbarPO.clickOnNthNavbarItem(NavbarPO.SKILLS);
      SkillsContainerPO.skillsContainer.should('be.visible');
    });

    it('should slide to projects section after clicking specific navbar button', () => {
      NavbarPO.clickOnNthNavbarItem(NavbarPO.PROJECTS);
      ProjectContainerPO.projectContainer.first().should('be.visible');
    });

    it('should slide to experience section section after clicking specific navbar button', () => {
      NavbarPO.clickOnNthNavbarItem(NavbarPO.EXPERIENCE);
      ExperienceContainerPO.experienceContainer.should('be.visible');
    });
  });

  describe('Testing redirecting to external websites', () => {
    it('should allow to navigate to live project website', () => {
      cy.on('url:changed', (newUrl) => {
        expect(newUrl).to.contain(ProjectContainerPO.PROJECT.url);
      });
      ProjectContainerPO.websiteButton
        .first()
        .invoke('removeAttr', 'target')
        .click({ force: true });
    });

    it('should allow to navigate to project repository', () => {
      cy.on('url:changed', (newUrl) => {
        expect(newUrl).to.contain(ProjectContainerPO.PROJECT.github);
      });
      ProjectContainerPO.gitHubButton.first().invoke('removeAttr', 'target').click({ force: true });
    });

    it('clicking linkedin button should navigate to linkedin', () => {
      cy.on('url:changed', (newUrl) => {
        expect(newUrl).to.contain(AboutDeveloperPO.LINKEDIN.href);
      });
      AboutDeveloperPO.buttonByAltText('LinkedIn')
        .invoke('removeAttr', 'target')
        .click({ force: true });
    });

    it('clicking github button should navigate to github', () => {
      cy.on('url:changed', (newUrl) => {
        expect(newUrl).to.contain(AboutDeveloperPO.GITHUB.href);
      });
      AboutDeveloperPO.buttonByAltText('GitHub')
        .invoke('removeAttr', 'target')
        .click({ force: true, multiple: true });
    });
  });
});
