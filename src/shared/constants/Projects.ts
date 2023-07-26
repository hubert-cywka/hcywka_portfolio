import { Project } from 'shared/types/Portfolio';
import {
  BEERS_TASK_GITHUB_URL,
  BEERS_TASK_URL,
  FLAVOURIFY_GITHUB_URL,
  FLAVOURIFY_URL,
  PORTFOLIO_GITHUB_URL,
  PORTFOLIO_URL,
  TEAMUP_BACK_GITHUB_URL,
  TEAMUP_UI_GITHUB_URL
} from './URLConstants';

import FLAVOURIFY1 from 'components/content/project/project-picture/assets/flavourify/1.webp';
import FLAVOURIFY2 from 'components/content/project/project-picture/assets/flavourify/2.webp';
import FLAVOURIFY3 from 'components/content/project/project-picture/assets/flavourify/3.webp';
import FLAVOURIFY4 from 'components/content/project/project-picture/assets/flavourify/4.webp';
import FLAVOURIFY5 from 'components/content/project/project-picture/assets/flavourify/5.webp';
import FLAVOURIFY6 from 'components/content/project/project-picture/assets/flavourify/6.webp';

import PORTFOLIO1 from 'components/content/project/project-picture/assets/portfolio/1.webp';
import PORTFOLIO2 from 'components/content/project/project-picture/assets/portfolio/2.webp';

import BEERS1 from 'components/content/project/project-picture/assets/beers/1.webp';
import BEERS2 from 'components/content/project/project-picture/assets/beers/2.webp';
import BEERS3 from 'components/content/project/project-picture/assets/beers/3.webp';
import BEERS4 from 'components/content/project/project-picture/assets/beers/4.webp';

import TEAMUP1 from 'components/content/project/project-picture/assets/teamup/1.webp';
import TEAMUP2 from 'components/content/project/project-picture/assets/teamup/2.webp';
import TEAMUP3 from 'components/content/project/project-picture/assets/teamup/3.webp';
import TEAMUP4 from 'components/content/project/project-picture/assets/teamup/4.webp';
import TEAMUP5 from 'components/content/project/project-picture/assets/teamup/5.webp';

export const FLAVOURIFY: Project = {
  uiGithub: FLAVOURIFY_GITHUB_URL,
  url: FLAVOURIFY_URL,
  imageSrc: [FLAVOURIFY1, FLAVOURIFY2, FLAVOURIFY3, FLAVOURIFY4, FLAVOURIFY5, FLAVOURIFY6],
  name: 'Flavourify',
  description: [
    "I've developed a recipe book app that caters to users' needs (actually, mine needs) by providing a convenient way to maintain collection of recipes. This app also incorporates a user system.",
    "One of the app's standout features is the option to create menus. Users can plan their meals by selecting recipes from available ones. The app then calculates the required ingredients, streamlining the grocery shopping process.",
    'The app was built using React and TypeScript, utilizing popular libraries such as Material UI, React Query, and React Hook Form for enhanced functionality and user experience. Its Mobile First Design ensures a seamless mobile viewing experience, and thanks to Capacitor, it can be easily converted into a mobile app.',
    'Backend is implemented with usage of Spring Boot.'
  ]
};

const PORTFOLIO: Project = {
  uiGithub: PORTFOLIO_GITHUB_URL,
  url: PORTFOLIO_URL,
  imageSrc: [PORTFOLIO1, PORTFOLIO2],
  name: 'Portfolio',
  description: [
    'Modern, simple and elegant responsive portfolio website created in React with as little libraries as possible.',
    'There were actually at least 3 design versions, but only this one met my requirements. I am quite happy of the outcome, especially that I have achieved that with low amount of css and it took me like only 3 hours to complete my vision.',
    'Technologies used: React, TypeScript, SCSS, MaterialUI, Cypress, Webpack, ESLint, Prettier.'
  ]
};

const BEERS_TASK: Project = {
  uiGithub: BEERS_TASK_GITHUB_URL,
  url: BEERS_TASK_URL,
  imageSrc: [BEERS1, BEERS2, BEERS3, BEERS4],
  name: 'Beers.',
  description: [
    'This application was created as a recruitment task.',
    'It allows to browse list of beers from public api and check their details. App is fully responsive, provides seamless user experience and is unbreakable and bug-free.',
    'Technologies used: React, TypeScript, SCSS, React Router, Cypress, Webpack, ESLint, Prettier.'
  ]
};

const TEAMUP: Project = {
  uiGithub: TEAMUP_UI_GITHUB_URL,
  backendGithub: TEAMUP_BACK_GITHUB_URL,
  imageSrc: [TEAMUP1, TEAMUP2, TEAMUP3, TEAMUP4, TEAMUP5],
  name: 'Team.Up (WIP)',
  description: [
    'Work in progress.',
    'Ever wanted to find a team to play some football or find a partner to go to gym? Team.Up allows you to do so! Create your own sport event or join existing one and keep up your healthy lifestyle!',
    'Team.Up frontend is created in Next.js, TypeScript and CSS modules and uses NextAuth. Backend application is created in Express.js and uses MongoDB. It is built on top of three-layer architecture.',
    'Technologies used: Next.js, React, TypeScript, SCSS, CSS modules, Cypress, Jest, Express.js, Node.js, MongoDB, Webpack, ESLint, Prettier.'
  ]
};

export const PROJECTS: Project[] = [FLAVOURIFY, PORTFOLIO, BEERS_TASK, TEAMUP];
