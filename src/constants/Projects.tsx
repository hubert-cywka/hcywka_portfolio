import { Project } from '../types/interfaces/Project';
import {
  FLAVOURIFY_GITHUB_URL,
  FLAVOURIFY_URL,
  PORTFOLIO_GITHUB_URL,
  PORTFOLIO_URL
} from './URLConstants';

const FLAVOURIFY: Project = {
  github: FLAVOURIFY_GITHUB_URL,
  url: FLAVOURIFY_URL,
  imageSrc: [
    'projects/flavourify/1.png',
    'projects/flavourify/2.png',
    'projects/flavourify/3.png',
    'projects/flavourify/4.png',
    'projects/flavourify/5.png',
    'projects/flavourify/6.png'
  ],
  name: 'Flavourify',
  description: [
    "I've developed a recipe book app that caters to users' needs (actually, mine needs) by providing a convenient way to maintain collection of recipes. This app also incorporates a user system.",
    "One of the app's standout features is the option to create menus. Users can plan their meals by selecting recipes from available ones. The app then calculates the required ingredients, streamlining the grocery shopping process.",
    'The app was built using React and TypeScript, utilizing popular libraries such as Material UI, React Query, and React Hook Form for enhanced functionality and user experience. Its Mobile First Design ensures a seamless mobile viewing experience, and thanks to Capacitor, it can be easily converted into a mobile app.',
    'Backend is implemented with usage of Spring Boot.'
  ]
};

const PORTFOLIO: Project = {
  github: PORTFOLIO_GITHUB_URL,
  url: PORTFOLIO_URL,
  imageSrc: ['projects/portfolio/1.png', 'projects/portfolio/2.png'],
  name: 'Portfolio',
  description: [
    'Modern, simple and elegant responsive portfolio website created in React with as little libraries as possible.',
    'There were actually at least 3 design versions, but only this one met my requirements. I am quite happy of the outcome, especially that I have achieved that with low amount of css and it took me like only 3 hours to complete my vision.',
    "Technologies used: React, TypeScript, SCSS, MaterialUI. That's it."
  ]
};

export const PROJECTS: Project[] = [FLAVOURIFY, PORTFOLIO];
