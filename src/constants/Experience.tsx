import { Experience } from '../types/interfaces/Experience';
import { IDEMIA_LINKEDIN_URL, IDEMIA_WEBSITE_URL } from './URLConstants';
import { IDEMIA_IMAGE } from './ImageConstants';

export const EXPERIENCE: Experience[] = [
  {
    companyName: 'IDEMIA',
    position: 'React Developer',
    to: 'Present',
    since: '10.2022',
    url: IDEMIA_WEBSITE_URL,
    linkedin: IDEMIA_LINKEDIN_URL,
    logo: IDEMIA_IMAGE,
    responsibilities: [
      'Creating web application using React, HTML, SCSS, TypeScript.',
      'Implementing several libraries, eg. React Query, React Hook Form.',
      'Integrating new interfaces with backend systems.',
      'Writing unit tests with usage of Jest and MSW.',
      'Reviewing code of coworkers.',
      'Organizing work using Git, GitHub and Trello.',
      'Gathering and defining customer requirements.',
      'Presenting results of work during weekly demos.',
      'Participating in designing openAPI.'
    ],
    description:
      'It was a great opportunity to learn good practices in a controlled environment and learn about the process of creating applications, including collecting customer requirements, presentations of progress, or the process of releasing applications to the cloud. We worked from scratch on a web application project in a team of 4 frontend and 5 backend developers. '
  },
  {
    companyName: 'Politechnika Łódzka',
    position: 'Bachelor Degree of IT',
    to: 'Present',
    since: '10.2021',
    description:
      'I am a second-year IT student at Politechnika Łódzka. Currently, I am immersing myself in the world of Information Technology, learning programming, network administration, and system analysis.'
  }
];
