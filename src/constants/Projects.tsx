import { Project } from '../types/interfaces/Project';
import { FLAVOURIFY_GITHUB_URL, FLAVOURIFY_URL } from './URLConstants';

export const FLAVOURIFY: Project = {
  github: FLAVOURIFY_GITHUB_URL,
  url: FLAVOURIFY_URL,
  imageSrc: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
  name: 'Flavourify',
  description: [
    "I've developed a recipe book app that caters to users' needs (actually, mine needs) by providing a convenient way to maintain collection of recipes. This app also incorporates a user system.",
    "One of the app's standout features is the option to create menus. Users can plan their meals by selecting recipes from available ones. The app then calculates the required ingredients, streamlining the grocery shopping process.",
    'The app was built using React and TypeScript, utilizing popular libraries such as Material UI, React Query, and React Hook Form for enhanced functionality and user experience. Its Mobile First Design ensures a seamless mobile viewing experience, and thanks to Capacitor, it can be easily converted into a mobile app.',
    'Backend is implemented with usage of Spring Boot.'
  ]
};
